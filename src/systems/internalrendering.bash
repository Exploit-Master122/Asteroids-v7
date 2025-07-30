#!/bin/bash
# deploy.sh

echo "Building Ultimate Asteroids for deployment..."

# Exit on any error
set -e

# 1. Run the build process (assumes Vite)
echo "Running build..."
npm run build

# 2. Check if build was successful (dist folder exists)
if [ ! -d "dist" ]; then
    echo "Build failed or 'dist' folder not found!"
    exit 1
fi

echo "Build successful. Files are in the 'dist' folder."

# 3. Optional: Deploy to GitHub Pages using a tool like gh-pages (needs prior setup)
# Uncomment the lines below if you have gh-pages installed (npm install gh-pages --save-dev)
# and configured in package.json scripts (e.g., "deploy": "gh-pages -d dist")

# echo "Deploying to GitHub Pages..."
# npm run deploy
# echo "Deployment finished."

# OR, if deploying manually or via GitHub Actions, just inform the user:
echo "To deploy manually:"
echo "  1. Commit the contents of the 'dist' folder."
echo "  2. Push to your 'gh-pages' branch or use GitHub Actions."

echo "Deployment script finished."
