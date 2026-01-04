#!/usr/bin/env python3
import re
import os
import urllib.request
import urllib.parse
from pathlib import Path
import ssl

# Disable SSL verification for problematic certificates (if needed)
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

html_file = Path(__file__).parent.parent / 'public' / 'palpit' / 'palpit.html'
public_dir = Path(__file__).parent.parent / 'public'
assets_dir = public_dir / 'palpit-assets'

# Create assets directory if it doesn't exist
assets_dir.mkdir(parents=True, exist_ok=True)

# Read the HTML file
print('Reading HTML file...')
with open(html_file, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract all URLs - context-aware matching
all_urls = set()

# Pattern 1: URLs in href, src, content attributes
# Match: href="https://static.parastorage.com/..." or src="https://static.wixstatic.com/..."
pattern1 = r'(?:href|src|content|data-url|data-href)\s*=\s*["\'](https://static\.(?:parastorage|wixstatic)\.com[^"\']+)["\']'
for match in re.finditer(pattern1, html_content, re.IGNORECASE):
    url = match.group(1)
    all_urls.add(url)

# Pattern 2: URLs in CSS url() functions
# Match: url("https://static.wixstatic.com/...")
pattern2 = r'url\s*\(\s*["\']?(https://static\.(?:parastorage|wixstatic)\.com[^"\')\s]+)["\']?\s*\)'
for match in re.finditer(pattern2, html_content, re.IGNORECASE):
    url = match.group(1)
    all_urls.add(url)

# Pattern 3: URLs in script src assignments (but not in template literals)
# Match: script.src = 'https://static.parastorage.com/...'
pattern3 = r'(?:script\.src|src)\s*=\s*["\'](https://static\.(?:parastorage|wixstatic)\.com[^"\']+)["\']'
for match in re.finditer(pattern3, html_content, re.IGNORECASE):
    url = match.group(1)
    all_urls.add(url)

# Pattern 4: Protocol-relative URLs
pattern4 = r'(?:href|src|content|data-url|data-href)\s*=\s*["\'](//static\.(?:parastorage|wixstatic)\.com[^"\']+)["\']'
for match in re.finditer(pattern4, html_content, re.IGNORECASE):
    url = 'https:' + match.group(1)
    all_urls.add(url)

# Pattern 5: Protocol-relative in CSS url() - handle both single and double quotes
pattern5 = r'url\s*\(\s*["\']?(//static\.(?:parastorage|wixstatic)\.com[^"\')\s]+)["\']?\s*\)'
for match in re.finditer(pattern5, html_content, re.IGNORECASE):
    url = 'https:' + match.group(1)
    all_urls.add(url)

# Pattern 5b: Protocol-relative in CSS url() with single quotes
pattern5b = r"url\s*\(\s*['](//static\.(?:parastorage|wixstatic)\.com[^')\s]+)[']\s*\)"
for match in re.finditer(pattern5b, html_content, re.IGNORECASE):
    url = 'https:' + match.group(1)
    all_urls.add(url)

# Pattern 6: URLs in JSON (escaped with \/)
# Match: "url":"https:\/\/static.parastorage.com\/..."
pattern6 = r'["\']url["\']\s*:\s*["\'](https:\\?/\\?/static\.(?:parastorage|wixstatic)\.com[^"\']+)["\']'
for match in re.finditer(pattern6, html_content, re.IGNORECASE):
    url = match.group(1).replace('\\/', '/')
    all_urls.add(url)

# Also extract from sourceMappingURL comments
pattern7 = r'//#\s*sourceMappingURL=(https://static\.(?:parastorage|wixstatic)\.com[^\s]+)'
for match in re.finditer(pattern7, html_content):
    url = match.group(1)
    all_urls.add(url)

# Pattern 8: URLs in JSON importmap
pattern8 = r'["\'](https://static\.(?:parastorage|wixstatic)\.com[^"\']+)["\']'
# Only match in importmap context to avoid matching JavaScript code
importmap_match = re.search(r'type="importmap"[^>]*>([^<]+)', html_content)
if importmap_match:
    importmap_content = importmap_match.group(1)
    for match in re.finditer(pattern8, importmap_content):
        url = match.group(1)
        all_urls.add(url)

# For media URLs with query parameters, also add base URL without params
media_urls_to_add = set()
for url in all_urls:
    if '/media/' in url and '?' in url:
        # Extract base URL without query params
        base_url = url.split('?')[0]
        media_urls_to_add.add(base_url)
        # Also try to extract the actual media file ID
        media_match = re.search(r'/media/([^/?]+)', url)
        if media_match:
            media_id = media_match.group(1)
            # Try both domains
            media_urls_to_add.add(f'https://static.wixstatic.com/media/{media_id}')

all_urls.update(media_urls_to_add)

# Filter out siteassets.parastorage.com (these are API endpoints, not static assets)
all_urls = {url for url in all_urls if 'siteassets.parastorage.com' not in url}

print(f'Found {len(all_urls)} unique URLs to download')

def get_file_name(url):
    """Get a safe filename from URL"""
    # Parse URL
    parsed = urllib.parse.urlparse(url)
    path_part = parsed.path

    # For URLs with query parameters that are image transformations, use base path
    if '?' in url and '/media/' in url:
        base_url = url.split('?')[0]
        parsed_base = urllib.parse.urlparse(base_url)
        path_part = parsed_base.path

    # Replace slashes with underscores, but preserve file extension
    parts = [p for p in path_part.split('/') if p]

    # If we have a media file, try to preserve some structure
    if '/media/' in path_part:
        media_match = re.search(r'/media/([^/]+)', path_part)
        if media_match:
            media_id = media_match.group(1)
            # URL decode if needed
            media_id = urllib.parse.unquote(media_id)
            # Try to get extension
            ext = ''
            url_lower = url.lower()
            if '.png' in url_lower: ext = '.png'
            elif '.jpg' in url_lower or '.jpeg' in url_lower: ext = '.jpg'
            elif '.gif' in url_lower: ext = '.gif'
            elif '.svg' in url_lower: ext = '.svg'
            elif '.webp' in url_lower: ext = '.webp'
            else:
                if '.' in media_id:
                    ext = '.' + media_id.split('.')[-1]
                else:
                    ext = '.png'
            # Clean media_id for filename
            media_id_clean = re.sub(r'[<>:"|?*]', '_', media_id)
            return f'media_{media_id_clean}{ext}'

    # Handle font files from wixstatic
    if '/ufonts/' in path_part:
        font_match = re.search(r'/ufonts/([^/]+)/([^/]+)/(file\.\w+)', path_part)
        if font_match:
            font_id, variant, filename = font_match.groups()
            return f'font_{font_id}_{variant}_{filename}'

    # Handle fonts from parastorage
    if '/fonts/' in path_part:
        font_match = re.search(r'/fonts/([^/]+)/([^/]+)', path_part)
        if font_match:
            font_path = '_'.join(font_match.groups())
            if '.' not in font_path:
                url_lower = url.lower()
                if '.woff2' in url_lower: font_path += '.woff2'
                elif '.woff' in url_lower: font_path += '.woff'
                elif '.ttf' in url_lower: font_path += '.ttf'
            return f'font_{font_path}'

    file_name = '_'.join(parts)

    # Ensure we have a valid extension
    if '.' not in file_name:
        url_lower = url.lower()
        if '.css' in url_lower: file_name += '.css'
        elif '.js' in url_lower: file_name += '.js'
        elif '.woff2' in url_lower: file_name += '.woff2'
        elif '.woff' in url_lower: file_name += '.woff'
        elif '.ttf' in url_lower: file_name += '.ttf'
        elif '.ico' in url_lower: file_name += '.ico'
        elif '.png' in url_lower: file_name += '.png'
        elif '.jpg' in url_lower or '.jpeg' in url_lower: file_name += '.jpg'
        elif '.svg' in url_lower: file_name += '.svg'
        elif '.gif' in url_lower: file_name += '.gif'
        elif '.webp' in url_lower: file_name += '.webp'
        elif '.map' in url_lower: file_name += '.map'

    # Clean filename
    file_name = re.sub(r'[<>:"|?*]', '_', file_name)
    # Limit length
    if len(file_name) > 200:
        name, ext = os.path.splitext(file_name)
        file_name = name[:200-len(ext)] + ext

    return file_name or 'file'

def download_file(url, file_path):
    """Download a file from URL"""
    max_retries = 2
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(url)
            req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
            req.add_header('Accept', '*/*')
            req.add_header('Accept-Language', 'en-US,en;q=0.9')
            req.add_header('Referer', 'https://www.palpit.es/')

            with urllib.request.urlopen(req, context=ssl_context, timeout=30) as response:
                if response.getcode() in (301, 302, 303, 307, 308):
                    redirect_url = response.headers.get('Location')
                    if redirect_url:
                        if not redirect_url.startswith('http'):
                            parsed = urllib.parse.urlparse(url)
                            redirect_url = f'{parsed.scheme}://{parsed.netloc}{redirect_url}'
                        return download_file(redirect_url, file_path)

                with open(file_path, 'wb') as f:
                    f.write(response.read())
            return True
        except urllib.error.HTTPError as e:
            if e.code == 403 and '/media/' in url and '?' in url and attempt == 0:
                # Try without query params for 403
                base_url = url.split('?')[0]
                if base_url != url:
                    return download_file(base_url, file_path)
            print(f'  HTTP Error {e.code}: {e.reason}')
            return False
        except Exception as e:
            print(f'  Error: {e}')
            return False
    return False

# Download all files
url_map = {}
success_count = 0
fail_count = 0

print('\nStarting downloads...\n')
for url in sorted(all_urls):
    file_name = get_file_name(url)
    file_path = assets_dir / file_name

    # Skip if already downloaded
    if file_path.exists():
        print(f'⏭  Skipping {file_name} (already exists)')
        url_map[url] = f'palpit-assets/{file_name}'
        continue

    print(f'⬇  Downloading {file_name}...')
    if download_file(url, file_path):
        url_map[url] = f'palpit-assets/{file_name}'
        success_count += 1
        file_size = file_path.stat().st_size
        print(f'   ✓ Downloaded ({file_size:,} bytes)')
    else:
        fail_count += 1
        print(f'   ✗ Failed')

print(f'\n{"="*60}')
print(f'Download complete: {success_count} succeeded, {fail_count} failed')
print(f'{"="*60}')

# Update HTML file
print('\nUpdating HTML file...')
updated_content = html_content

# Replace all URLs - longer URLs first to avoid partial matches
sorted_urls = sorted(url_map.keys(), key=len, reverse=True)

for original_url in sorted_urls:
    local_path = url_map[original_url]
    escaped_url = re.escape(original_url)

    # Replace in various contexts
    # 1. In attributes: href="URL" or src="URL"
    updated_content = re.sub(
        f'(["\']){escaped_url}\\1',
        f'\\1{local_path}\\1',
        updated_content
    )

    # 2. In CSS url(): url("URL")
    updated_content = re.sub(
        f'url\\(["\']?{escaped_url}["\']?\\)',
        f'url("{local_path}")',
        updated_content,
        flags=re.IGNORECASE
    )

    # 3. In script assignments: script.src = 'URL'
    updated_content = re.sub(
        f'(script\\.src|src)\\s*=\\s*["\']{escaped_url}["\']',
        f'\\1 = "{local_path}"',
        updated_content,
        flags=re.IGNORECASE
    )

    # 4. In sourceMappingURL comments
    updated_content = re.sub(
        f'//#\\s*sourceMappingURL={escaped_url}',
        f'//# sourceMappingURL={local_path}',
        updated_content
    )

    # 5. Protocol-relative versions in CSS url()
    if original_url.startswith('https://'):
        proto_rel = original_url[6:]
        escaped_proto = re.escape(proto_rel)
        # In CSS url() with single quotes
        updated_content = re.sub(
            f"url\\([']{escaped_proto}[']\\)",
            f"url('{local_path}')",
            updated_content,
            flags=re.IGNORECASE
        )
        # In CSS url() with double quotes
        updated_content = re.sub(
            f'url\\(["]{escaped_proto}["]\\)',
            f'url("{local_path}")',
            updated_content,
            flags=re.IGNORECASE
        )
        # In CSS url() without quotes
        updated_content = re.sub(
            f'url\\({escaped_proto}\\)',
            f'url("{local_path}")',
            updated_content,
            flags=re.IGNORECASE
        )
        # In attributes
        updated_content = re.sub(
            f'(["\']){escaped_proto}\\1',
            f'\\1{local_path}\\1',
            updated_content
        )

    # 6. JSON-escaped versions
    escaped_url_json = escaped_url.replace('/', '\\/')
    updated_content = re.sub(
        escaped_url_json,
        local_path.replace('/', '\\/'),
        updated_content
    )

# Write updated HTML
print('Writing updated HTML file...')
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print('✓ HTML file updated successfully!')
print(f'\nAll assets saved to: {assets_dir}')
