var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComposeModel = new Schema({
    t_email:{
        type:String
    },
    f_email:{
        type:String
    },
    message:{
        type:String
    },
    date:{
        type: Date
    }
},{
    collection:"ComposeEmail"
})

module.exports = mongoose.model('ComposeModel', ComposeModel);