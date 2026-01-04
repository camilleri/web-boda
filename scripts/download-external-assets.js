const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const htmlFile = path.join(__dirname, '../public/palpit/palpit.html');
const publicDir = path.join(__dirname, '../public');
const assetsDir = path.join(publicDir, 'palpit-assets');

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Read the HTML file
const htmlContent = fs.readFileSync(htmlFile, 'utf8');

// Extract all URLs from parastorage.com and wixstatic.com
const urlPattern = /https?:\/\/(?:static\.)?(?:parastorage\.com|wixstatic\.com)([^"'\s<>\)]+)/g;
const urls = new Set();
let match;

while ((match = urlPattern.exec(htmlContent)) !== null) {
  const fullUrl = match[0];
  // Clean up URL - remove query parameters and fragments for some cases
  urls.add(fullUrl);
}

console.log(`Found ${urls.size} unique URLs to download`);

// Function to download a file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(err);
    });
  });
}

// Function to get a safe filename from URL
function getFileName(url) {
  // Remove protocol and domain
  let pathPart = url.replace(/^https?:\/\/(?:static\.)?(?:parastorage\.com|wixstatic\.com)/, '');

  // Remove query parameters for some file types
  if (pathPart.includes('?')) {
    const [basePath, query] = pathPart.split('?');
    // For images with query params like /v1/fill/..., keep the base path
    if (basePath.match(/\/media\/[^\/]+/)) {
      pathPart = basePath;
    } else {
      pathPart = basePath;
    }
  }

  // Replace slashes with underscores, but preserve file extension
  const parts = pathPart.split('/').filter(p => p);
  const fileName = parts.join('_');

  // Ensure we have a valid extension
  if (!fileName.includes('.')) {
    // Try to determine extension from URL
    if (url.includes('.css')) return fileName + '.css';
    if (url.includes('.js')) return fileName + '.js';
    if (url.includes('.woff')) return fileName + '.woff';
    if (url.includes('.woff2')) return fileName + '.woff2';
    if (url.includes('.ttf')) return fileName + '.ttf';
    if (url.includes('.ico')) return fileName + '.ico';
    if (url.includes('.png')) return fileName + '.png';
    if (url.includes('.jpg') || url.includes('.jpeg')) return fileName + '.jpg';
    if (url.includes('.svg')) return fileName + '.svg';
  }

  return fileName || 'file';
}

// Download all files
async function downloadAll() {
  const urlMap = new Map();
  let successCount = 0;
  let failCount = 0;

  for (const url of urls) {
    const fileName = getFileName(url);
    const filePath = path.join(assetsDir, fileName);

    // Skip if already downloaded
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${fileName} (already exists)`);
      urlMap.set(url, `palpit-assets/${fileName}`);
      continue;
    }

    try {
      console.log(`Downloading ${url}...`);
      await downloadFile(url, filePath);
      urlMap.set(url, `palpit-assets/${fileName}`);
      successCount++;
      console.log(`✓ Downloaded ${fileName}`);
    } catch (error) {
      console.error(`✗ Failed to download ${url}: ${error.message}`);
      failCount++;
    }
  }

  console.log(`\nDownload complete: ${successCount} succeeded, ${failCount} failed`);

  // Update HTML file
  console.log('\nUpdating HTML file...');
  let updatedContent = htmlContent;

  // Replace all URLs
  for (const [originalUrl, localPath] of urlMap) {
    // Escape special regex characters in URL
    const escapedUrl = originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedUrl, 'g');
    updatedContent = updatedContent.replace(regex, localPath);
  }

  // Also handle URLs with // prefix (protocol-relative)
  const protocolRelativePattern = /\/\/(?:static\.)?(?:parastorage\.com|wixstatic\.com)([^"'\s<>\)]+)/g;
  updatedContent = updatedContent.replace(protocolRelativePattern, (match) => {
    const fullUrl = 'https:' + match;
    if (urlMap.has(fullUrl)) {
      return urlMap.get(fullUrl);
    }
    return match;
  });

  // Write updated HTML
  fs.writeFileSync(htmlFile, updatedContent, 'utf8');
  console.log('HTML file updated successfully!');
}

downloadAll().catch(console.error);

