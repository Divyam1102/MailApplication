import mongoose from "mongoose";
/* require is not supported with nodejs v 17 because it is a part of common.js modules and this code is using es6 modules
 * var mongoose = require('mongoose');*/
var Schema = mongoose.Schema;

var LoginModel = new Schema({
    email:{
        type:String
    },
    password: {
        type:String
    }
},{
    collection:"EmailLogin"
})

/*Converting the CommonJS  code to ES6 code
 * 
 module.exports = mongoose.model('LoginModel', LoginModel);*/

export default mongoose.model('LoginModel', LoginModel);