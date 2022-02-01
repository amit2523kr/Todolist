//require mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist_db');

//connections

const db = mongoose.connection;
db.on('error', console.error.bind(console,'error connecting to  the database'));
db.once('open',function(){
    console.log("successfully connected to the database");
});