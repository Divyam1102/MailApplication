const express = require('express');
const app = express();
const email_Routes = express.Router();

let LoginModel = require('../models/login');
let InboxModel = require('../models/inbox');
let ComposeModel = require('../models/Compose');

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

email_Routes.route('/ComposeEmail').post(function(req,res){
    
    let composemail = new ComposeModel(req.body);
    console.log(req.body)
    composemail.save().then(composemail=>{
        res.json("Email Sent");
    }).catch(err=>{
        res.json(err);
    })
    
    let inboxmail = new InboxModel({R_email: req.body.t_email, Message: req.body.message, Date: req.body.date})
    console.log(inboxmail)
    inboxmail.save().then(inboxmail=>{
        console.log("Email Recevied")
    }).catch(err=>{
        res.json(err);
    })
});

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

email_Routes.route('/delete').get(function(req,res){
    console.log(req.params)
    // InboxModel.remove({_id: req.params.id}, function(err, result){
    //     if(err){
    //         res.json(err);
    //     }else{
    //         res.json("Message Deleted");
    //     }
    // })
})
module.exports = email_Routes;