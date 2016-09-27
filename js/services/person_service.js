angular.module("app_form").service("person_service", ["$http",  function($http){
    
     var object=this;
    this.id=null;
    this.personList={};
    $http.get("/service/person").then(function(response){
        console.log("loggin personList from person table");
        console.log("End of response");
        

        object.personList= response.data;
        console.log(object.personList);
    });
    
    
  this.getPersonListIds = function(){
      
  
    
    $http.get("/service/person/"+object.id).then(function(response){
        
        
        console.log("logging to personList response for personIds");
        console.log("End of response");
       
        
        object.PersonListIds= response.data;
        
        
        console.log(object.PersonListIds);
    });
    
    }
    
    
    
    
    
}]);