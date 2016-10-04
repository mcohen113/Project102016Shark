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
console.log("larry")
$(document).ready(function() {
   $('.diver').keypress(function(event) {

      if (event.target === 38) {
        console.log(event)
       $(this).css({bottom:'+=30px'});
     }
   });
   $('.diver').keyup(function(event) {
       $(this).animate({
           height: '-=30px'
       });
   });
   // $('.diver').click(function() {
   //     $(this).toggle(3000);
   // });
});
