var stop;
$(document).ready(function(){
    var count=0;
    Reveal.addEventListener( 'slidechanged', function( event ) {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        console.log(event.currentSlide);
        count++;
        console.log(count);
    });
    
    stop = function(){
        $('audio').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        }); 
    }

    $('#audio_1')[0].play();

});
