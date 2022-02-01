// require express, path and database
const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const todolist = require('./model/todolistapp');

// adding ejs  template
const app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// adding our task to the home page
app.get('/', function(req,res){
    todolist.find({},function(err,todolists){
        if(err){
            console.log('Error in fetching todolist from db');
            return;
        }
        return res.render('home', {
        title:"TodoList",
        todolistapp:todolists
    });
    });
});

// pushing todolist schema to the database

app.post('/todo-list',function(req,res){
    todolist.create({
        Description:req.body.Description,
        Category:req.body.Category,
        Today_date:req.body.Today_date
    }, function(err,newTodolist){
        if(err){
            console.log('error in creating a todolistapp!');
            return;
        }
        console.log('*******',newTodolist);
        return res.redirect('back');
    
});
});

// Deleting the task from to do list
app.get('/delete-todolist',function(req,res){
    let id = req.query.id;
    todolist.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error in deleting the task from todolist app");
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port, function(err){
    if(err){
        console.log("error you can't open the file", err);
    }
    console.log('yup! the server is running on the port:', port);
});