#!/bin/bash

echo 'Building esm ...'

cross-env \
NODE_ENV=production \
BABEL_ENV=esm \
babel ./src \
--extensions '.js,.ts,.tsx' \
--keep-file-extension \
--config-file ./babel.config.js \
--out-dir ./build/esm \
--copy-files \
--no-copy-ignored \
--ignore 'src/cjs,src/esm,src/umd,src/core,**/*.test.js,**/__tests__/**/*,**/*.d.ts'

echo 'Building esm done!'

echo 'Copy .d.ts files ...'

OUT_DIR=./build/esm babel-node ./scripts/release/copyTypeScriptDefinitionFiles.js
