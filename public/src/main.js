console.log('Hey Mitch, main.js is connected!');

$(function() {
    let i = 1; // After the primary image loads the image[1] will begin the interval
    let images = []; 
    let $image = $('#slider img');

    // Assigning each image index to a image path
    images[0] = 'images/artist.jpg';
    images[1] = 'images/hip-hop.jpg';
    images[2] = 'images/rap.jpg';
    images[3] = 'images/rock.jpg';

    setInterval(function(){
      $image.fadeOut(500, function(){
        $image.attr('src', `${images[i++]}`);
        $image.fadeIn(500);
      }); // end of fadeOut

      // i greater than length, reset
      if(i > images.length - 1) {
        i = 0;
      }

    }, 3000); // end of setInterval
})