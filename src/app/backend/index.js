var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./db'),
    cors = require('cors');

const email_Routes = require('../backend/routes/emailroutes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.post('/', (req,res)=>{
//     res.json({"message":"Welcome"});
// })

app.use(cors());
mongoose.Promise =global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=>{console.log("Database connected")},
    err =>{console.log("Could not connect the database")}
)

app.use('/', email_Routes);
// let port = process.env.PORT || 4000;
// const server = app.listen(function(){
//     console.log("Server Started at port : "+port);
// });
app.listen(4000,()=>{console.log("Server connected to 4000")})