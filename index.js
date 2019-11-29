const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//to get a static folder
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`)
);

// npm start & node index are gonna run the server without nodemon
// npm run dev will run with nodemon 
