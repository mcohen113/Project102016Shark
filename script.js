// var RightPos = 0;
// var RightPos2 = 0;

// function Red_Box(){
// var elem = document.getElementById("diver");
// //var pos = 0;
// RightPos = RightPos + 5;
// //console.log(RightPos);
// var currentPosition;
// var moveBy = '30px';

// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 39:
//             YellowBox_Move();

//             break;
//         case 90:
//             //alert('right');
//             Red_Box();
//             break;
//     }
// };

$(document).ready(function() {
   $('body').keypress(function(event) {
      console.log('event')
      if (event.which === 119) {
        console.log('This is event', event);
       $('.diver').css({bottom:'+=10px'});
     }
   });
   $('body').keyup(function(event) {
       $(this).animate({
           height: '-=10px'
       });
   });
});


   $('body').keypress(function(event) {
      console.log('event')
      if (event.which === 104) {
        console.log('This is event', event);
       $('.diver').css({bottom:'-=10px'});
     }
   });
   $('body').keyup(function(event) {
       $(this).animate({
           height: '+=10px'
       });
   });



   $('body').keypress(function(event) {
      console.log('event')
      if (event.which === 100) {
        console.log('This is event', event);
       $('.diver').css({right:'-=10px'});
     }
   });
   $('body').keyup(function(event) {
       $(this).animate({
           height: '+=10px'
       });
   });


$document

