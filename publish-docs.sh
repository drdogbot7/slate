#!/usr/bin/env bash
set -o errexit #abort if any command fails
pwd

# cd to timber directory and generate new docs
cd ../timber
git checkout updating-wiki-docs
sh ./bin/generate-docs.sh
git checkout gh-pages

# build site files and copy into timber repo
cd ../slate
git add source/includes
# git commit -m 'Updating docs'
bundle exec middleman build
rm ../timber/*
mv build/* ../timber/

# step back into timber directory and publish to gh-pages
#cd ../timber
#git add .
#git commit -m 'Updating docs'