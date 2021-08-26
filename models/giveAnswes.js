const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    ques_id : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    answer : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('Answers', answerSchema)