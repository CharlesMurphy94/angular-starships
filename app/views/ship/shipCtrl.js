angular.module('starships').controller('shipCtrl',function($scope, shipSrvc, $stateParams){
    shipSrvc.getShipById($stateParams.id).then(ship=>{
        $scope.ship=ship
    }
    )
    // $scope.ships = ['X-wing','Deathstar','Ty-fighter', 'Millenium Falcon'];

})