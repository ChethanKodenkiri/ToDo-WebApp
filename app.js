const express = require('express');
const app = express();
const bodyParse= require('body-parser');
const date =  require(__dirname+"/date.js");
app.set('view engine', 'ejs');



app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static('public'));
const items=["Buy Groceries","Cook Food","Eat Food"];
const workItem=[];
const day = date.getDate();
//day=date.getDay();
app.get("/", function(req,res){

    res.render('list',{listTitle:day,kindOfItems:items})
});


app.post("/", function(req,res){
    let item = req.body.newItems;
   console.log(req.body)
    if(req.body.list === 'Work '){
        workItem.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    } 
   
});


app.get("/work",function(req,res){
    res.render('list',{listTitle:'Work',kindOfItems:workItem})  
});

app.get("/about",function(req,res){
    res.render('about');
})

app.listen(3000, function(){
    console.log("Server 3000 is running.....")
})