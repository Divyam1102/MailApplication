var mongoose = require('mongoose');
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

module.exports = mongoose.model('InboxModel', InboxModel);