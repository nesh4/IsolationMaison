app.controller('AdminController', function($scope, saveService) {
    $scope.test = function(){
        saveService.getForm(function(data){
            console.log(data.data);
            
        });
    }
});