var mongoose = require('mongoose');
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

module.exports = mongoose.model('LoginModel', LoginModel);