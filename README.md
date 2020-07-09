# Api Candidates

A api for add and get the best Candidate with NodeJs


## Installing
```
npm i
```
or 
```
yarn
```

## Init project
```
npm run start
```
or
```
yarn start
```

## Running project
In app
```
node index.js
```

## Running the tests
```
npm run test
```

## Path
- ### Get all Candidates
Url
```
/candidates
```
Example
```
curl -X GET "http://localhost:4000/candidates" -H "accept: application/json"
```

- ### Get the best Candidates
Url
```
/candidates/search?skills[]=skill
```
Example
```
curl -X GET "http://localhost:4000/candidates/search?skills[]=php&skills[]=js" -H "accept: application/json"
```

- ### New Candidate
Url
```
/candidates
```
##### Body
```
body
{
  "id": "123456789",
  "name": "Name Test",
  "skills": ["skill1", "skill2", "skill3"]
}
```
Example
```
curl -X POST "http://localhost:4000/candidates" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"id\": \"123456789\", \"name\": \"Name Test\", \"skills\": [ \"js\", \"php\", \"express\" ]}"
```
## Doc Swagger
```
/api-docs
```
## Authors
* **Jesús Castillo** - [github](https://github.com/jesuscasesl)


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
