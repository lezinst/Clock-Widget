angular.module('clock').controller('timerControl', function($interval, $scope){
    // var alarmControl = this;
    $scope.time = 1.00;
    //holds the interval promise
    var promise;
    
    $scope.startCounting = function(){
        $scope.time+=1;
    }
//starts the alarm
    $scope.startTimer = function(){
        $scope.stopCounting();
        promise = $interval($scope.startCounting, 1000);
    };
//cancels the promise returned by the $interval service every second
    $scope.stopCounting = function(){
    $interval.cancel(promise);

    }
//ensure interval is destroyed recommended by documentation.
    $scope.$on('$destroy', function() {
    $scope.stop();
    });
 
 //reset the timer to timer

    $scope.reset = function(){
        $scope.time = 0;
    }

});



