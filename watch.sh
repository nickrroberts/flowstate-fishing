#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}👀 Watching for changes in Flow State Fishing theme...${NC}"
echo -e "${GREEN}✨ Changes will auto-sync to Ghost${NC}"
echo ""

# Watch for changes and sync
fswatch -o . -e ".*" -i "\\.hbs$" -i "\\.css$" -i "\\.js$" -i "\\.json$" | while read f
do
  echo -e "${BLUE}📦 Changes detected, syncing...${NC}"
  rsync -av --exclude 'node_modules' --exclude '.git' --exclude 'design' --exclude '*.zip' \
    /Users/nickrroberts/Code/flow-state-fishing/ \
    ~/Code/ghost-local/content/themes/flow-state-fishing-dev/
  echo -e "${GREEN}✅ Theme synced!${NC}"
  echo ""
done