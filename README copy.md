# DevOps Technical Assessment

## Build

run `npm install`

## Up server

run `npm start`

## Test

run `npm test`

## How test API

The APIKey must be included in HTTP Headers

curl -X POST -H "Content-Type: application/json" -H "X-Parse-REST-API-Key: ${APIKEY}" -H "X-JWT-KWY:${JWT}" -d "{\"message\":\"This is a test\",\"to\":\"Juan Perez\",\"from\":\"Rita Asturia\",\"timeToLifeSec\":45}" http://locahost:3001/DevOps

## Contact

Linkedin [Stalin Pilapanta ](https://www.linkedin.com/in/stalin-pilapanta-3b9b1096/).