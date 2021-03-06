angular.module('starships').service('shipSrvc', function($http){
    this.getShipList = function(){
        return $http.get('https://swapi.co/api/starships/').then(res=>{
            return res.data.results.map(ship=>{

                let id = ship.url.slice(31,ship.url.length-1) * 1;
                ship.id = id;
                return ship;
            })
        }
        )
    }
    this.getShipById = function(id){
        return $http.get(`https://swapi.co/api/starships/${id}/`).then(res=>{
            return res.data
        }
        )
    }
})