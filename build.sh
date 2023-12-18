#!/bin/bash

set -euo pipefail

BUILD="build"
EXT_NAME=$(basename $PWD)

echo "Clean and set up build dir..."
rm -rf $BUILD
mkdir -p $BUILD/audio
mkdir -p $BUILD/images

echo "Copy files..."
cp manifest.json lib/* build
find audio -type f -exec cp {} $BUILD/audio \;
find images -type f -exec cp {} $BUILD/images \;

echo "Zip files..."
zip -r build/$EXT_NAME.zip $BUILD
