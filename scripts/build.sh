#!/bin/bash
export $( cat .env|xargs)

./node_modules/.bin/webpack \
  --colors \
  --verbose \
  --devtool eval \
  --progress \
  --display-chunks \
  --minified \
  --optimize-occurrence-order \
  --bail

./node_modules/.bin/webpack \
  --config ./examples/webpack.config.js \
  --colors \
  --verbose \
  --devtool inline-source-map \
  --progress \
  --display-chunks \
  --minified \
  --optimize-occurrence-order \
  --bail
