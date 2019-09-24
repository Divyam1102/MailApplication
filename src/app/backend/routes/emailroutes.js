const express = require('express');
const app = express();
const email_Routes = express.Router();

let LoginModel = require('../models/login');
let InboxModel = require('../models/inbox');
let ComposeModel = require('../models/Compose');
let ArchiveModel = require('../models/Archive');

//Verify Login Information
email_Routes.route('/loginEmail').post(function(req,res){
    
    LoginModel.findOne({email:req.body.email},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
})

//Display Inbox
email_Routes.route('/Inbox/:email').get(function(req,res){
    console.log(req.params)
    InboxModel.find({R_email: req.params.email}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            console.log(result)
            res.json(result);
        }
    })
})

//Compose an Email
email_Routes.route('/ComposeEmail').post(function(req,res){
    
    let composemail = new ComposeModel(req.body);//Object of ComposeEmail DB
    console.log(req.body)
    composemail.save().then(composemail=>{
        res.json("Email Sent");
    }).catch(err=>{
        res.json(err);
    })
    
    let inboxmail = new InboxModel({R_email: req.body.t_email, Message: req.body.message, Date: req.body.date})//Object of InboxEmail DB
    console.log(inboxmail)
    inboxmail.save().then(inboxmail=>{
        console.log("Email Recevied")
    }).catch(err=>{
        res.json(err);
    })
});

//Email Sent

email_Routes.route('/sent/:email').get(function(req, res){
    ComposeModel.find({f_email: req.params.email},function(err, result){
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
})
//Email Deleted
email_Routes.route('/delete/:id').get(function(req,res){
    console.log(req.params)
    // InboxModel.remove({_id: req.params.id}, function(err, result){
    //     if(err){
    //         res.json(err);
    //     }else{
    //         res.json("Message Deleted");
    //     }
    // })
})

//Email Archived
email_Routes.route('/archive').post(function(req,res){
    let a_model = new ArchiveModel({
        t_email: req.body.R_email,
        message: req.body.Message
    })

    a_model.save().then(a_model=>{
        res.json("Message Archived");
    }).catch(err=>{
        res.json(err);
    })

})

//Search Email
email_Routes.route('/search/:email').get(function(req,res){
    InboxModel.find({R_email: req.params.email}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})
module.exports = email_Routes;