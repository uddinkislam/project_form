angular.module("app_form").controller("app_ctrl", ["$scope", "person_service", function($scope, person_service){
    
    
    $scope.completeData=[];
    person_service.formData=$scope.completeData;
    console.log(person_service.formData);
    
    
    $scope.$watch(function(){
        return person_service.personList;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, Person");
              
                console.log(newVal);
              
                console.log("OLD VAL, Person");
              
                console.log(oldVal);  //there is no old val
              
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
        console.log(id);
        person_service.getPersonListIds();
 
    }
    
    $scope.update=function(flag){
        $scope.flag=flag;
    }
    
    
    
    
    
        $scope.data= {
            fname: "", 
            lname: "", 
            address: "", 
            pNumber:""
        };
        
    
        $scope.submit = function() {
        if ($scope.data !=null) {
            
            console.log($scope.data);   //this data is showing on console
            
          
            $scope.completeData.push(this.data);
            $scope.data="";
            
            person_service.postData();
            
        
    }
};         
                 
    
}]);