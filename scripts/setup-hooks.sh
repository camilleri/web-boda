#!/bin/bash

HOOKS_DIR=".git/hooks"
HOOK_FILE="$HOOKS_DIR/pre-commit"

if [ ! -d "$HOOKS_DIR" ]; then
  echo "Git hooks directory not found. Are you in a Git repository?"
  exit 1
fi

echo "Setting up pre-commit hook..."
cat > "$HOOK_FILE" <<EOF
#!/bin/bash
# Pre-commit hook to run linting
npm run lint
if [ \$? -ne 0 ]; then
  echo "Linting failed. Commit aborted."
  exit 1
fi
EOF

chmod +x "$HOOK_FILE"
echo "Pre-commit hook installed."