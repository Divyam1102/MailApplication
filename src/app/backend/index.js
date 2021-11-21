import  express  from "express";
import path  from "path";
import bodyParser  from "body-parser";
import  mongoose  from "mongoose";
//import { config }  from "./db.js";
import  cors  from "cors";
import { email_Routes } from "../backend/routes/emailroutes.js";

//const email_Routes = require('../backend/routes/emailroutes');
const app = express();
const config = {
		DB:'mongodb://localhost:27017/emailApplication'
}
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