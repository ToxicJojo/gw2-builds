#!/bin/bash

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ToxicJojo/gw2-builds.git master:gh-pages

cd ..
