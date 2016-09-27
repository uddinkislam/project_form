angular.module("app_form").controller("app_ctrl", ["$scope", "person_service", function($scope, person_service){
    
    
    
    
    
    $scope.$watch(function(){
        return person_service.personList;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, Person");
              
                console.log(newVal);
              
                console.log("OLD VAL, Person");
              
                console.log(oldVal);
              
               $scope.personList=newVal;
            }
        
        
    });
    
    
    
    
      $scope.$watch(function(){
        return person_service.PersonListIds;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, Person");
              
                console.log(newVal);
                console.log("OLD VAL, Person");
                console.log(oldVal);
              
               $scope.PersonListIds=newVal;
            }
        
        
    });
                 
                 
    
}]);