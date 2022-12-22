@echo off

cd xml
copy /B ../aliases.json .
git add .
git commit -m "UpdateDate 20221209"
git tag 20221209
git push
git push --tags
cd ..

cd json
copy /B ../aliases.json .
git add .
git commit -m "UpdateDate 20221209"
git tag 20221209
git push
git push --tags
cd ..

pause
@echo on