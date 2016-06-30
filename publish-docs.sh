#!/usr/bin/env bash
set -o errexit #abort if any command fails

# cd to timber directory and generate new docs
cd ../timber
git checkout updating-wiki-docs
echo 'Generating docs'
sh ./bin/generate-docs.sh

# build site files and copy into timber repo
cd ../slate
if git diff-index --quiet HEAD --; then
    echo 'No changes detected, exiting'
    exit
fi

git add .
git commit -m 'Updating docs'
echo 'Building site files'
bundle exec middleman build
cd ../timber
git checkout gh-pages
git ls-files | xargs rm
mv ../slate/build/* .

# step back into timber directory and publish to gh-pages
echo 'Publishing to GH pages'
git add -u
git commit -m 'Updating docs'