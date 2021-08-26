const express = require('express');
const router = express.Router()
const Question = require('../models/askQuestions')
const Answer = require('../models/giveAnswes')

router.get('/ask/ques', (req,res) => {
    res.render('askQuestion');
})

router.post('/send/ques', async (req,res) => {
    var ques = new Question({
        name : req.body.uname,
        questions : req.body.uquestion
    }) 
    
    try{
        const myques = await ques.save();
        res.redirect('/');
    }
    catch{
    console.log(req.body);
    }
});

router.get('/', (req,res) => {
    Question.find({}, (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            res.render('home', {users : data})
        }
    })
})

router.get('/giveAns', (req,res) => {
    var ques_id = req.query.id;
    res.render('giveAns', {ques_id});
})


router.post('/send/ans', async (req,res) => {
    var ans = new Answer({
        ques_id : req.body.quesId,
        name : req.body.uname,
        answer : req.body.uanswer
    }) 
    
    try{
        const myques = await ans.save();
        res.redirect('/');
    }
    catch{
    console.log(req.body);
    }
});


router.get('/showAns', (req,res) => {
    /*
        params
        localhost:3000/update/user/10
        router.get("update/user/{id}")
        req.params.id

        query
        localhots:3000/update/user/?user_id=10&user_name=ast
        router.get("update/user")
        req.query.user_id
        req.query.user_name
    */
    var quesid = req.query.id; 
    var myques;
    Question.findById({_id: quesid}, (err,resques)=>{
        if(err){console.log(err)}
        else{
            myques = resques;
        }
    })
    Answer.find({ques_id : quesid} , (err,ans)=>{
        if(err){
            console.log(err);
        }
        else{
            if (ans.length === 0){
                status = 0
            }
            else{status = 1}
            res.render('allAns', {ans, myques, status});
        }
    })
})








module.exports = router;