# Express.js demo

## what is Express?

- Express is a fast, unopinionated, minimalist web framework for Node.js.

* Express is a server-side OR back-end framework. it's not comparable to client-side frameworks like React, Angular. it Can be used in combination with those frameworks to build full stack apps.

* many times you would build the API with Express so that it takes request from the front end and then it serves back data usually in JSON format and then you can do what you want with it in the front end.

## why use Express??

- makes building web applications with node.js much easier.

- used for both server rendered apps as well as API/Microservices.

- Extremely light, fast, free.

- full control of request and response.

- by far the most popular node framework.

- great to use with client-side frameworks as it's all JS.

## The basic sytax of a web server:

to get a server run in the browser.

```javascript
const express = require("express");

//init express
const app = express();

//create your endpoints/ routehandlers
app.get("/", function(req, res) {
  res.send("hello world!");

  //listen on a post
  app.listen(5000);
});
```
<br>
### Explaining the code above:

- basically we bring in Express in the top using using the CommonJs module syntax(require).

#### Note: with node you can't use the import Es6 modules with default, just yet.
if You do wanna use it you have to use something like (babel) to compile it, otherwise You're gonna use this syntax.

- then to initialize Express You just set a variable to the express method, it's usually called `app` by convention, but you can name it anything.

- then You create Your endPoints, in this case we're accepting a GET request to the index route (which is the slash symbol) and then, We just have a Callback function that takes in a request and a response.

- then we do whatever we want, in this case we're just responding with the text of hello world! with send method.
( the resonse object have a method called send that will just send something to the browser(some Text or whatever).)


- and of course, we need to listen on a PORT, which in this case we're listening on 5000.

so if we go on localhost:5000 we will se Hello world!
and of course we can create routes to whatever you want, if you wanted to do `/users` or whatever.
<br>
## Basic Route Handling:

- within Your route we can do just about anything, fetch data from a database using (MongoDB, Postgrads,mySql)

- You can load pages, You can return JSON data. You have access to the request and response: 
<br> 


  - the request and response objexts are very important, The request obj represents the HTTP request properties for things like URL parameters, Query striings, any data that sent within the body, the HTTP headers, all that stuff is included in the request.
  You can also create middleware , where you can change, add things to this object
<br>
  
  - the response object represents the HTTP response, It's up to you to use this object to send back, JSON data, render a template. You can do multiple things with this response object.

- we can parse incoming data with the body parser.

- we don't have to put all of our routes in one file, because Express has a Router, it lets us store routes in seperate and then we can just export them.


<br>
##Express middleware :

MiddleWare functions are functions that have access to the request and response object. Express has built in middleware but middleware comes from 3rd parties you install  , we can also write our own middleware functions.

- capable of executing any code.

- making changing to the request/response objs.

- Ending the response cycle.

- call next middleware in the stack. (You have to call the next middleware in the stack, so when you write a piece of middleware you'll call a next function) so you can think of it as a stack of functions that executes whenever a request is made to the server, and you can do diferent things within those functions. 

 - we'll discuss more in depth about middleware later on.

<br>

### Note:
Postman: It's an HTTP client, it makes requests to our server. It can make (GET,POST,PUT,DELETE).


<br>

## setting up our app tools:

-The first thing You're gonna wanna do is create a Package.json:
`npm init -y`


-then You're gonna wanna install Express: 
`npm install express`

-thn we're gonna create our main entry file. (index.js)
<br>



## we're gonna start off by creating a simple Express Server.

```javascript
//bring in express
const express = require('express')
// initialize a variable called app with express

const app = require();
// we need to listen on a port

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`server is running on ${PORT}`))



```

### Notes: 

 1. this `app variable` which we stored express in it. it has bunch of properties and methods, one of which is listen, and that's we actually need to use to run the webserver. by listening on a PORT. 
  
 2. it's better to store this port number in a variable. 
  However we also wanna add the process environment port(process.env.PORT) 
  which means that we wanna look at the environment variables, one called (PORT).
the reason we put this is when we deploy, the server isn't mostly gonna run on 5000. it's gonna have the port number in an environment variables, so wanna check that first. and if that's not available then we wanna run on 5000 `const PORT = process.env.PORT || 5000`



<br>

- finally, we might add our callback function on listen method as a second parameter and might console log a statement, so when we run our server it'll let us know in the console that it's running. 

<br>
- and if we run `node index` (or whatever your file name is) we'll see that the server is running.

we're gonna get (Cannot GET /). slash is the route for index page, and it's basically saying that it can't find a route handler for this (/). if we tried to go to `/about` for example. it'll say can not get /about. because we haven't created any routes/endpoints. 


<br>

### Create a route

```javascript
const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD!</h1>')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`)
);

```

 - to create a route we wanna use app and the the type of request you wanna handle. 

 - when we go to a web page that's a get request. so we wanna do app.get()

  - the first parameter is the route and it's gonna be slash(/). and the second parameter is gonna be a function, this function takes in 2 parameters(req,res).

  - every route we create is gonna have access to this request and response object

 - the resonse object have a method called send that will just send something to the browser(some Text or whatever).

  - if we went to the server and refreshed the page nothing would happen. that's because we would have to restart the server (Ctrl + c)
and then run `node index` again.
and that's where nodemon comes in handy. because we don't wanna reset the server everything we make a change. 
so we're gonna install nodemon, it's a package which will constantly watch our server. 
`npm install -D nodemon` 
 it's a dev dependency because it's only for development, we're not using it in production.

 <br>
 to use the nodemon, we would go to package.json and create 2 script. the first one is gonna be `start` instead of `test`. which is gonna run (node index). and the 2nd is gonna be dev and set it to "nodemon". 

```javascript
"scripts":{
  "start": "node index",
  "dev": "nodemon index"
}
```
-the difference is node index, You'll have to keep resetting the server everytime you make a change. and nodemon will constantly watch it.

`npm run dev` we can see now that it's running on 5000. however nodemon is running.

-notice that that we typed in `npm run dev` if instead we typed in `npm dev` it won't run. because when we create a script unless it's start or test then we have to type in `run`.


<br>
### sending file through the response object:

-we're gonna bring in the path node module. 
and we're gonna use sendFile on the response object instead of send. and we're gonna load an HTML file.

```javascript
const path = require('require') 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')) // to joins all the the path segments together and get this file
})

```
  NOTE: refer to the index.html file in public folder.

 - we're gonna make a folder called public contains an HTML file and type in the body tag `<h1>My Website</h1>`

the res would go this path and get this file. so if we go to our server we would see (My Website) and if we go to the source code we'll see all of the HTML.

  - However this isn't efficient because we would have to put a route manually for every sinle page if we want an about page a contact page. we would have to put seperate routes. like this:



  ```javascript

  const path = require('require') 
  app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html')) 

  ```
  - and this isn't ideal.

<br> 

### 18:40 set a static folder:

- if we want just a static server that servers just HTML, CSS images. Express comes with functionality to make a certain folder a static folder.


```javascript
  app.use(express.static(path.join(__dirname,'public')))

```
-use is a method that we use when we wanna include middleware. and we pass to it
`express.static()` and we point to the folder that we wanna set as our static folderr. we're gonna set our public folder.
now we could put any file in our public folder and it'll work. e.g. we're gonna put an about HTML file in that public folder. 
and if we went to our localhost server and typed `/about` it'll work! and we could put as many files as we want without having to put a route manually for every sinle page.

   #### note: we have to include the extension name when searching on the route of our server to get the response `/about.html` if you're working with static.

 <br>

 if you did watch the crash course on node.js, 
 this is what we did, and we wrote a whole lot of code to do the same thing with just one line (static) we had to handle the content type ourselves, loading the HTML files, loading the CSS.

 -but usually this is not what you're going to use express for. for the most part you're gonna build either JSON API's so that you can connect from a front-end like React or sth like that. 

<br>
OR you wanna render templates where you can insert dynamic data so that you can create a dynamic app rather than just a static website 



### 21:45 creating a simple REST API: 

- we're gonna create just a simple REST API we're not gonna be dealing with a database, we're just gonna have a hard-coded array, but it's the same principle when we're dealing with routes and response and all of that stuff.

```javascript
const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@gmail.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Shannon Jackson',
    email: 'shannon@gmail.com',
    status: 'active'
  }
];


app.get('/api/members', (req,res) =>{
  res.json(members)
})

```

 - here we're creating a route `/api/members` <br>
we're gonna hardcode an array of members and we wanna return it as json when we hit this route. 

 - we can hit it with React, Vue, Angular. but we're gonna do it with Postman. and we can get these members.



 - we're gonna return it with `res.json()` and we can simpely pass in members.

#### Note: we don't have to do JSON.Stringify() or anything, even though these are JS objects, cuz this would take care of it. 

- Save our JS file, then open up postman application (make sure to select get request) and type in:
`http://localhost:5000/api/members`


 ### 24:00 MiddleWare:

#### refer to the logger file in middleware folder.

 ```javascript

const logger = (req, res, next) => {
    console.log('hello');
    //getting the URL and date
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next()
}
//init middleware
app.use(logger)

```

 - as we mentioned middleware funcs, they're just functions that have  access to (req,res) and we can add, change and so on.

 - we're creating a simple middleware function called `logger`, it takes in three parameters
(req, res, next) and we wanna always call (next) last so we can move to the next middleware function that's in the stack. 

 - and for now we're just gonna console log hello.
 - we type next at the end

 - in order to initialize we do `app.use` and pass in `logger` 

 - now if we saved and reload postman (make a request) we would get hello in the console.
 so everytime we make a request this middleware is gonna run, and we could do anything in its body, we could execute any code we want, we have access to the request and response.
 <br>

 - so what we're gonna do is we're gonna log the URL that's hit and the date (we have access to part of the URL with request object) 
`req.protocol` is gonna give us (HTTP), then we're gonna do `://`  and then we wanna get the Host which is also available in the request object `req.get('host')` then we want what's called the original URL which is the page `req.originalUrl`.

if we go to postman and send a request and look in the console. We'd get the whole URL that's hit. `http://localhost:5000/api/members`

 - to get the date and time formatted after it, we'd have to install a third-party package called moment, which deals with date. 

 `npm i moment`

- we would have to bring in moment in our main javascript file.

`const moment = require('moment')`

- and then after the url we'll put the function moment().format()

```javascript
console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
```

- if we saved and make a request through postman we'll get the URL and date in our console


<br>

### 30:15 getting single member fromthe API

#### refer
```javascript

app.get('/api/members/:id', (req, res) => {
    res.send(req.params.id) //http://localhost:5000/api/members/5 => it gives us 5
})

```
#### explanation:

- `app.get()` we wanna a get request. we need to specify an ID. because we wanna get the member by their ID.
so we're gonna say `app.get(/api/members/:id)` don't forget the colon
 `:id` is a URL parameter
 - we'll use the request object to grab whatever is in there. we'll use res.send, e.g. to see how this works
 `res.send(req.params.id)`


- this will give us only the number of if we'll input.

- but we want the specific member of the id we input. 
so we need to use `res.json()`

- ther's different ways we could do this, we're gonna use `Filter` method which will take an array and just filter things out based on a condition.

```javascript 
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(function (member) {
        member.id === req.params.id
    }))
})

```

let's get the member of ID 1.
`http://localhost:5000/api/members/1`

- if we run that, we won't get anything back. the reason for that is the id of the array member is a number `id: 1` and `req.params.id` sends it as a string.

so we need to wrap it in parseInt(), the reason for that is that we're using trpple equal === so the types have to match

```javascript
res.json(members.filter(function (member) {
        member.id === parseInt(req.params.id)
    }))

```

- now we can get in specific member depending on its id.
`http://localhost:5000/api/members/1`
`http://localhost:5000/api/members/2`
`http://localhost:5000/api/members/3`


- now if we tried to get an id member that's not in there.
`http://localhost:5000/api/members/5`
it'll return nothing.
now what we wanna do is give it a message saying that there's no member with that id. ther's a lot of different ways we can do this but we're gonna use the sum method. and what it does is, It'll run a condition and give us a true or false based on that condition.

`const found = members.some((member) => member.id === parseInt(req.params.id))`

  - so if it doesn't exist this will equal false, if it does exist this will equal true.


 ```javascript

    if (found) {
      res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }  else{
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }      


 ```
 - we're adding an if statement to check. and move our code in that. if it's an ideal id request it'll show.

else we wanna give a message that it's not found.

res.json``({ msg: `no member with the id of ${req.params.id}` })`` // doing just that would give us a message.

 but we do have an issue here, because if that id member isn't there, we're gonna get a status:200 which means everything is Ok. but we wanna get a status of 400. it means that it's a bad request. and give it a message. 

 - if we run the code above we'll get a message with 400 status code. 
<br>



### 37:25 express route

##### Note: having all the routes in our index file it's getting kind of cramped up so we can put all of our similar routes into a single file so we will create a folder called routes. inside of it we're create a folder called api, because not all of our routes they might not be api's, when we're serving json we may have routes where we're serving server side templates. we'll create a foile in it called members.js. so we'll cut our routes, all members and single member  and put it in members.

###### in order to use the express router, in order to work we need to bring in express. and make a variable and set in to express.Router (Uppercase R) 
```javascript

const express = require('express')
const router = express.Router()
```

###### when we use the router, when we handle our request we use router the the type(GET,PUT, so on..) instead of app 
`router.get`

and we need to require the (Members.js) in our current file which is (member.js).
and export our router to use it in our index main file.

in our main js:
```javascript
app.use('/api/members', require('./routes/api/members'))

```

we need to use app.use() the first parameter we pass the route that we want and the second we need to require that file.

and since we have the routes in our main file, we don't need it in the member file, we can replace with `/`
`app.use('/api/members', require('./routes/api/members'))`


<br>

### 41:25 create a member:

##### whenever we create something on the server or we're adding to a database, we make a POST request in most cases. 
so to handle a post request we're gonna say `router.post` instead of `router.get` 
whether it's a form submission or whether it's getting send with the API or Axios.  

```javascript
router.post('/', (req,res)=>{
  res.send(req.body)
})

```

 - we're passing `/` because we wanna hit the `/api/members`. even though we're using it above with get method, we can still use it with post because they're different methods. 
  so we can use the same route as long as they're different methods.

 - the second parameter is our callback function and it takes the request and response object.
 we wanna to be able to send data and when we get that data, it's gonna be in the request obj.

 - we're sending request body. 
 - we'll go to Postman and make sure to select post request to 
 `http://localhost:5000/api/members`
 we wanna send some data, an email, and the name for the member.
 on Postman under headers, we'll create the `Content-Type` of value `application/json` cuz that's the type of data we're sending.

 -then under the body, we'll choose raw and put in some json.

 ```javascript
 {
  "name": "Jake Smith",
  "email": "jake@gmail.com"
 }
 ```

 if we send this we'll get nothing back. and the reason for that we need to use a body parser, so that we can parse the data that we're sending in the body. we used to install third-party package, it was a body parser, however with the newest version of Express we don't have to do that, ther's one included with Express, we just have to initialize it as middleware. so we'll go back to our main index js:

 ```javascript
 //body parser middleware
app.use(express.json())
app.use(express.urlencoded(extended: false))

 ```
`express.json()` will allow us to handle raw json

- we also wanna handle form submission usin `app.use(express.urlencoded())` and pass in an object with extended and set it to false, so that way we can handle URL encoded data

- now if we go back to postman and send, when we do the `res.send` for the request body it gives us the data that we've just send, and it's coming from `req.body`


 
##### Obviously we don't wanna just get that back, we want to create a new member  

```javascript
router.post('/', (req,res)=>{
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }
  if(!newMember.name || newMember.email){
   return res.status(400).json({msg : 'Please include a name and an email'})
  }

  members.push(newMember)
  res.json(members)
  
})

```

- we'll create a variable called `newMember` and set it to be an object.

usually when we're dealing with IDs using a database like mongoDB or MySql, postgrads.  they usually create the IDs for us. 
we're not using a database so we're gonna install uuid which will generate random ID for us.

`npm i uuid` 
and bring in it in our members file `const uuid = require('uuid')`

- for the id property we will use `uuid.v4()`
- for the name property, we'll get that from the request body `req.body.name`
- for the email `req.body.email`

- for status: `active` it'll always be set to active when a new member is created

- we'd wanna make sure that the name, email are sent with the request, 
so we'd create a check if the any of those isn't found we'll return `res.status(400)` because it's a bad request

- we need to do an else, because if we didn't, we'll get an error that says headers are already sent. but if that's the case we could just add a `return` statement that way we don't need an else. 

- then we need to push that newMember to the hardcoded array that we have.
and return the whole array including the one that we're pushing. (we could also return just the member itself)

- if we send that, without an email or name it'll say (Please include a name and an email).
 
 but if we provide them, we will get all of our current members and the new one.


 <br>

 ### 49:02 Update a member


 ##### Note: when we're we're dealing with a real API obviuosly we're gonna have a database, we're not just gonna have a file with the data. what would happen is you'll install a package like Mongoose which is an object relational or object data mapper for mongoDB, and we would connect to our database and instead of pushing on to files like this.we'd do something like `members.save(newMember)` and some kinda syntax like that. 
 so here, we're just dealing with hard-coded data. 


 - when we update something on the server we use PUT request
 - we're gonna copy the get sinle member because it's gonna be similar, we wanna check and make sure that there's a member with that id. it'll say the same. No member with this id.

 - if it's found, we'll first create a variable `updMember` and set it to request body. we'll get the email and name from this `req.body`

 - then we wanna loop through the members we have and check to see if it matches this id, if it does, that's the onfolding mountaine we wanna update.
the problem is they might update the email and not the name or vise versa, so we would check if the name and email are actually sent, so we'll use ternary operator

```javascript

router.put('/:id', (req, res) => {
    // chech to see if the member exists
    const found = members.some((member) => member.id === parseInt(req.params.id))
    if (found) {
        const updMember = req.body
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                res.json({ msg: 'member updated', member })
            }
        })

    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }
})
```


<br>

### 55:56 delete member:


```javascript
router.delete('/:id', (req, res) => {

    const found = members.some((member) => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id !== parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }
})

```

 - it's gonna be a delete request (the approach is a bit similar to get request) so we're gonna copy it, but change get to delete.
 - we need the id cuz we need to know which one to delete
 - we will keep found to check if the id is in there or not.
 - we'll still gonna use filter but it's gonna be `!==` to filter out the one with the id.

 - we'll also put a message inside `res.json` `Member deleted successfully` and the second parameter is goonna be all members except the one that was deleted.

 - go to post man make a delete request. 
 `http://localhost:5000/api/members/1` for example. it'll return member 2 and 3 and the first will be filtered out.


 <br>

 
