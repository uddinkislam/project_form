var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');


app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    //to support URL-encoded bodies
    extended: true
}));

//setting up the static files for hosting
app.use(express.static(__dirname + '/'));

console.log("file initialized");

app.use(connection(mysql,{
    host        : 'localhost',
    user        : 'ui',
    password    : 'ui1234',
    database    : 'shopping_cart_2'
    },'request'));

//Routing
//this is routing but to connect the rest API with our database

var url = "/service/person";


app.get(url,function(req, res, next){
   //arrays to store dynamic parameters
    
    
    var query = "SELECT * FROM person";
    req.getConnection(function(err, connection){
       if(err) return next(err);
        
        connection.query(query, function(err, results){
           if(err){
               console.log(err);
               return next("Mysql error, check your query");
           } 
            res.json(results);
            console.log(results);
            
        });
        
        
    });
    
    
});

app.get( "/service/person/:id",function(req, res, next){
   //arrays to store dynamic parameters
    var person_id =[];
    var id=req.params.id;
    person_id.push(person_id);
    
    var query = "SELECT * FROM person WHERE id = ?";
    req.getConnection(function(err, connection){
       if(err) return next(err);
        
        connection.query(query, id, function(err, results){
           if(err){
               console.log(err);
               return next("Mysql error, check your query");
           } 
            res.json(results);
            
        });
        
        
    });
    
    
});

//SAMPLE FOR TEMPLATING SERVICES

var url="/service/person/insert";
var query = "INSERT INTO person SET ?";
var data = ["first_name", "last_name", "address", "phone_number"];

//Passing values into the services

postService(url, query, data);

//END of POST SERVICE TEMPLATE

//Create
function postService(url, sqlQuery, data){ 
app.post(url, function(request, response, next){
   try{
       var reqObj=request.body;
       request.getConnection(function(error, conn){
          if(error) {
              console.log("SQL connection error:", error);
              return next(error);
          }
           else
               {
                   var insertSql=sqlQuery;
                   var insertValues={};
                   for(var i=0; i<data.length; i++){
                       insertValues[data[i]]=reqObj[data[i]];      
                   }
                   
                   var query = conn.query(insertSql, insertValues, function(error, result){
                      if(error){
                          console.log("SQL error", error);
                          return next(error);
                      } 
                       console.log(result);
                       var name_id = result.insertId;
                       response.json({"name": name_id});
                       
                   });
               }
       });
   }
    catch (ex){
        console.log("Internal Error:"+ex);
        return next(ex);
    }
  
    
});
}



//routing
app.get('/index', function(req, res){
   res.redirect('/views/index.html'); 
    });

//End of routing

//launching application on localhost.
app.listen(8383, function(){
   console.log('server loaded on port 8383'); 
    
});