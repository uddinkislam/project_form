angular.module("app_form").service("person_service", ["$http",  function($http){
    
    
    
    $http.get("/service/person").then(function(response){
        console.log("loggin personList from person table");
        console.log("End of response");
        

        object.personList= response.data;
        console.log(object.personList);
    });
    
    
    
    var object=this;
    this.id=null;
    
  
    
    $http.get("/service/person/1").then(function(response){
        
        
        console.log("logging to personList response for personIds");
        console.log("End of response");
       
        
        object.PersonListIds= response.data;
        
        
        console.log(object.PersonListIds);
    });
    
    
    
    
    
    
    
}]);