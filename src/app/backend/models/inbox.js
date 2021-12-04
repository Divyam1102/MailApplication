import mongoose from "mongoose";
/*require is not supported with nodejs v 17 because it is a part of common.js modules and this code is using es6 modules
 * var mongoose = require('mongoose');*/
var Schema = mongoose.Schema;

var InboxModel = new Schema({
    R_email:{
        type:String
    },
    Message:{
        type:String
    },
    Date:{
        type: Date
    }
},{
    collection:"InboxEmail"
})

/*
 * Converting the CommonJS  code to ES6 code
 module.exports = mongoose.model('InboxModel', InboxModel);*/

export default mongoose.model('InboxModel', InboxModel);