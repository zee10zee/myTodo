var express = require("express"),
    bodyParser = require("body-parser"),
    ejs = require("ejs"),
    app = express();
    var date = require(__dirname + "/date.js");
    // var date = require("/list.js");
      
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(express.static("public"));

      
     

      var items = ["sleeping", "praying the down", "eating"];
      var workItems = [];
    

     app.get("/", (req, res)=>{
        let day = date.getDate();
        res.render("index", {listTitle : day,  listItems : items}); 
     });

    
     app.get("/work", function(req, res){

        let day = date.getDay();
         res.render("work", {listTitle : day , workItems : workItems});
     });

 
     app.post("/", (req, res)=>{
        var todoItem = req.body.todoItem;
      
        items.push(todoItem);

       res.redirect("/");
 //  work route

     });
      
     app.post("/work", (req, res)=>{
        var workItem = req.body.todoItem;

                workItems.push(workItem);
                res.redirect("work");
     });

     app.get("/about", (req, res)=>{
         res.render("about");
     })

    app.listen(process.env.PORT || 3000, ()=>{
        console.log("port 3000 is running ... ");
    });