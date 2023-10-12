var con=require('./connection');
var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/login.html');
  });
  app.post('/',function(req,res){
    var mob=req.body.mob;
    var Email=req.body.Email;
    var pwd=req.body.pwd;
    
    con.connect(function(error) {
        if (error) throw error;
       
        var sql = "INSERT INTO CUSTOMER(mob,Email,pwd) VALUES ('"+mob+"', '"+Email+"','"+pwd+"')";
        con.query(sql, function (error, result) {
            if (error) throw error;
            res.redirect('/submit.html');
    });
  
    });
});
app.get('/submit.html', function(req, res) {
  
});
  app.listen(8089);
