angular.module('timeController').controller('clockControl', timeControl);

$scope.secondHand = document.getElementsByClassName('hr');

function startClock(){
    document.getElementsByClassName('hr').onload = function(){
        if(this.innerHTML === 'Play'){
            this.innerHTML === 'Pause';
            
        }
    }
}