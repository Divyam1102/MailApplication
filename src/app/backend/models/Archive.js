var mongoose = require('mongoose');
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

module.exports = mongoose.model('ArchiveModel', ArchiveModel);