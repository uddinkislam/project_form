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
    
    
    $scope.call =function(id){
         person_service.id=id;
        alert(id);
        person_service.getPersonListIds();
 
    }
    
    
    
//        $scope.list = [];
//        $scope.text = 'hello';
//        $scope.submit = function() {
//        if ($scope.text) {
//        $scope.list.push(this.text);
//        $scope.text = '';
//    }
//};         
                 
    
}]);