// require mongoose
const mongoose = require('mongoose');
const todolistSchema = new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Today_date:{
        type:String,
        required:true
    },
});
const todolist = mongoose.model('todolist',todolistSchema);
module.exports = todolist;