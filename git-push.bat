@echo off

cd xml
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221118"
git tag 20221118
git push
git push --tags
cd ..

cd json
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221118"
git tag 20221118
git push
git push --tags
cd ..

cd json_split
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221125"
git tag 20221125_swagger
git push
git push --tags
cd ..

cd json_arrange
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221125"
git tag 20221125_arrange
git push
git push --tags
cd ..

pause
@echo on