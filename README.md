# authenticated-api-server
### Project: Autharization
### Author: Fatema Owedah

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-fatemaOwedah/authenticated-api-server/pull/3)
- [heroku](https://authenticated-api-server-lab15.herokuapp.com)

#### Documintation

### Modules

### Setup

#### `jest`
#### `express`
#### `dotenv`
#### `supertest`

#### How to initialize/run your application 
- node index.js /nodemon
- after that go to swagger
https://authenticated-api-server-lab15.herokuapp.com/signup ===> app.post
https://authenticated-api-server-lab15.herokuapp.com/signin ===> app.get
https://authenticated-api-server-lab15.herokuapp.com/users ===> app.get
https://authenticated-api-server-lab15.herokuapp.com/oauth ===> app.get
https://authenticated-api-server-lab15.herokuapp.com/secret ===> app.get

role ==========> [admin, writer, regular, editor]

https://authenticated-api-server-lab15.herokuapp.com/read [admin, writer, regular, editor] ===> app.get
https://authenticated-api-server-lab15.herokuapp.com/add  [admin, writer, editor]  ===> app.post
https://authenticated-api-server-lab15.herokuapp.com/change [admin, editor]  ===> app.put
https://authenticated-api-server-lab15.herokuapp.com/remove [admin]  ===> app.delete

http://authenticated-api-server-lab15.herokuapp.com/api/v1/categories ===> app.post
http://authenticated-api-server-lab15.herokuapp.com/api/v1/categories ===> app.get
http://authenticated-api-server-lab15.herokuapp.com/api/v1/categories/:id ===> app.get
http://authenticated-api-server-lab15.herokuapp.com/api/v1/categories/:id ===> app.put
http://authenticated-api-server-lab15.herokuapp.com/api/v1/categories/:id ===> app.patch
http://authenticated-api-server-lab15.herokuapp.com/api/v1/categories/:id ===> app.delete
///////////////////////////////////////////////////
http://authenticated-api-server-lab15.herokuapp.com/api/v1/products ===> app.post
http://authenticated-api-server-lab15.herokuapp.com/api/v1/products ===> app.get
http://authenticated-api-server-lab15.herokuapp.com/api/v1/products/:id ===> app.get
http://authenticated-api-server-lab15.herokuapp.com/api/v1/products/:id ===> app.put 
http://authenticated-api-server-lab15.herokuapp.com/api/v1/products/:id ===> app.patch
http://authenticated-api-server-lab15.herokuapp.com/api/v1/products/:id ===> app.delete
to run test ===> npm test / npm run test



#### How do I install the app or library
- npm init -y 
- npm i express jest dotenv supertest
- npm install -g json-server

#### Tests
npm run test 

#### UML
![UML](/assets/lab15.jpeg)