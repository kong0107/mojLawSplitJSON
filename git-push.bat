@echo off

cd json_split
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221111"
git tag 20221111_swagger
git push
git push --tags
cd ..

cd json_arrange
copy ../aliases.json .
git add .
git commit -m "UpdateDate 20221111"
git tag 20221111_arrange
git push
git push --tags
cd ..

pause
@echo on