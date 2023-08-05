const path = require('path');
const express = require('express');
const app  = express();
const bodyparser = require('body-parser');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))); 
app.use(bodyparser.json());

let todos = [];

app.get('/gettask',(req,res)=>{
    res.send(todos);
})

app.post('/addtask',(req,res)=>{
    todos.push(req.body.newtask);
    res.redirect('/gettask');
})

app.get('/#',(req,res)=>{
    res.send("hrllo");
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})