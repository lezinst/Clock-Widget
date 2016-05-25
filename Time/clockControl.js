angular.module('clock').controller('clockControl', function(){
  var clockControl = this;
  
  clockControl.secondHand = document.getElementById('seconds');
  clockControl.minuteHand = document.getElementById('minutes');
  var handTracker = 6;

  // var style = window.getComputedStyle(clockControl.secondHand, null).getPropertyValue("transform");
  
  clockControl.startMinuteHand = function(){
			clockControl.minuteHand.style.transform = "rotate(" +handTracker+ "deg)";
			handTracker+=6;
	}

  clockControl.startHands = function(){ 
		var x = 0;
			setInterval(function(){
				if(clockControl.secondHand.style.transform === "rotate(0deg)") {
					clockControl.startMinuteHand();
				}
				if(clockControl.secondHand.style.transform === "rotate(354deg)") {
					x = 0;
					console.log('reset 0 degrees', clockControl.secondHand.style.transform);

				}
				
				clockControl.secondHand.style.transform = "rotate(" +x+ "deg)";
				x+=6;
				console.log(clockControl.secondHand.style.transform);
			},1000);


	}

   clockControl.startClock = function(){
		if(clockControl.secondHand.style.transform = "none") {
			clockControl.startHands();
		}
	}

//
	

		
		
	
	
	 
});

