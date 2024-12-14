#!/bin/bash
# Exit on any error
set -e

# Check if the user wants to run a development server
if [[ "$1" == "dev" ]]; then
  echo "Starting Docusaurus development server..."
  yarn start
# Check if the user wants to build the site
elif [[ "$1" == "build" ]]; then
  echo "Building the Docusaurus static site..."
  yarn build
# Check if the user wants to serve the built site
elif [[ "$1" == "serve" ]]; then
  echo "Serving the static site..."
  yarn serve
else
  echo "Usage: dev | build | serve"
  exit 1
fi