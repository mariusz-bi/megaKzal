const express =require('express');
require('express-async-errors');
const cors = require('cors');

const {handleError} = require('./utils/error')
const {routeRouter} = require("./routers/route");


const app = express();

app.use(cors());

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.use('/route', routeRouter);
app.use(handleError);

app.listen(3001, 'localhost', () =>{
    console.log('listening on http://localhost:3001');
});
