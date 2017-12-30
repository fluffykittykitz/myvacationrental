$(function(){
	//DOM READY 

'use strict'

  var $gallery= $('.slideshow'),
  $body=$('body');
  
    if(jQuery().cycle){
    
        var cycleOptions= {
        slides:"li",
        timeout:1500
        };
    
        $gallery.cycle(cycleOptions);
    
    }
    

	
});


