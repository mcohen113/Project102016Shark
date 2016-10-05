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

// $('body').keypress(function(e){console.log(e)}) to check keys to the console

$(document).ready(function() { //start javascript
   $('body').keypress(function(event) {
      console.log('event')
      if (event.which === 119) { //assign key to move diver up when "w" is pushed
        // console.log('This is event', event);
       $('.diver').css({bottom:'+=10px'}); //by distance of 10px
     }
   });
   $('body').keyup(function(event) { //diver stops when key is de-pressed
       $(this).animate({
           height: '-=10px'
       });
   });
});


   $('body').keypress(function(event) {
      console.log('event')
      if (event.which === 122) { //assign key to move diver down when "z" is pushed
        // console.log('This is event', event);
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
      if (event.which === 100) { //assign key to move diver left when "a" is pushed
        // console.log('This is event', event);
       $('.diver').css({left:'+=10px'});
     }
   });
   $('body').keyup(function(event) {
       $(this).animate({
           height: '-=10px'
       });
   });


   $('body').keypress(function(event) {
      console.log('event')
      if (event.which === 97) { //assign key to move diver right when "d" is pushed
        // console.log('This is event', event);
       $('.diver').css({left:'-=10px'});
     }
   });
   $('body').keyup(function(event) {
       $(this).animate({
           height: '+=10px'
       });
   });


// function setInterval() {
//   $('shark1').animate
// }

