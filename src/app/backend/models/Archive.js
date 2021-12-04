import mongoose from "mongoose";
/*require is not supported with nodejs v 17 because it is a part of common.js modules and this code is using es6 modules
 * var mongoose = require('mongoose');*/
var Schema = mongoose.Schema;

var ArchiveModel = new Schema({
    t_email:{
        type:String
    },
    message:{
        type:String
    },
},{
    collection:"ArchiveEmail"
})

/*Converting the CommonJS  code to ES6 code
 * module.exports = mongoose.model('ArchiveModel', ArchiveModel);*/
export default mongoose.model('ArchiveModel', ArchiveModel);