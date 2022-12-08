@echo off

cd xml
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221125"
git tag 20221125
git push
git push --tags
cd ..

cd json
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221125"
git tag 20221125
git push
git push --tags
cd ..

pause
@echo on