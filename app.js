const express = require("express");
// const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

// This is for Getting Input values.
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


let items = [" ok"];
app.get("/",function(req,res){
    let today = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US",options);
    res.render('list',{
        kind_of_day : day,
        list_items : items
    });
});

app.post("/",function(req,res){
    let item_inp = req.body.inp1;
    // console.log(input);
    items.push(item_inp);
    res.redirect("/");
});



app.listen(3000,function(){
    console.log("App is running Successfully");
});
