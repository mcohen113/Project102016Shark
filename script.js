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
var isOverlapped = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width();
        height = $( elem ).height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }

    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();
$(document).ready(function() { //start javascript
    $diver = $('.diver');
    $shark1 = $('#shark1');
    $sharks = $('.shark');
    $gameover = $('.gameover')

    $gameover.hide();



    $diver.on('swim', function(event){

      console.log("I'm swimming");

      if(isOverlapped(this, $shark1)){
        $diver.trigger('collision')
      }
    })

    function moveShark(){
      console.log('we movin')
      $sharks.animate({
          left: 800
        },{
          duration: 4000,
          step: function () {
            console.log('moving right')
            if(isOverlapped(this, $diver)){
              $diver.trigger('collision')
            }
          },
          done: $sharks.animate({
            left: -50
          },{
            duration: 2500,
            step: function () {
              console.log('moving left')
              if(isOverlapped(this, $diver)){
                $diver.trigger('collision')
              }
            },
            complete: moveShark
          })
        })
      } //set shark off the screen so its outside the view, pick a new left

    moveShark()

  //  setInterval(function() {
  //   $sharks.animate({ left: $(window).width() + 'px' }, 9000, 'linear', function() {
  //     $(this).css({ left: - 0});
  //     if(isOverlapped(this, $diver)){
  //       $diver.trigger('collision')
  //     }
  //   });
  // }, 10);




   $('body')
    .on('collision', function(event) {
      console.log("YOU GOT MAIL")
      $gameover.show()

    })
    .keypress(function(event) {



      console.log('event')
      switch (event.which){
        case 119: //w
          $diver
            .css({bottom:'+=10px'})
            .trigger('swim')
          break;

        case 122: //z
          $diver
            .css({bottom:'-=10px'})
            .trigger('swim')
          break;

        case 115: //a
          $diver
            .css({left:'+=10px'})
            .trigger('swim')
          break;

        case 97: //s
          $diver
            .css({left:'-=10px'})
            .trigger('swim')
          break;


      //assign key to move diver up when "w" is pushed
        // console.log('This is event', event);
        //by distance of 10px
     }
   });

});
//collision detection from http://stackoverflow.com/questions/4230029/jquery-javascript-collision-detection


   // $('body').keyup(function(event) {
   //     $(this).animate({
   //         height: '+=10px'
   //     });
   // });



   // $('body').keyup(function(event) {
   //     $(this).animate({
   //         height: '-=10px'
   //     });
   // });



   // };
   // $('body').keyup(function(event) {
   //     $(this).animate({
   //         height: '+=10px'
   //     });
   // });
//shark loops across the screen horizontally
// $(function() {

// });



// $(function) setDiver() {
//   if ($('diver').css.top = ($('shark2').css.top {
//           alert ('you got bit!!!')
//   };  //if top postion of shark = top pos of diver, send alert
// };


