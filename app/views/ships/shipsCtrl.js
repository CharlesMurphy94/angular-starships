angular.module('starships').controller('shipsCtrl',function($scope, shipSrvc){
    shipSrvc.getShipList().then(ships=>{
        $scope.ships = ships;
    }
    )
    // $scope.ships = ['X-wing','Deathstar','Ty-fighter', 'Millenium Falcon'];

})