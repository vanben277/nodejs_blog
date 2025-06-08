const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))


// middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// http logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})