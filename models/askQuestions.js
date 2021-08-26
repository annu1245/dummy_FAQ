const mongoose = require('mongoose');


const myquestions = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    questions : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Question', myquestions);