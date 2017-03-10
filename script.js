
var currentDiver = $('#diver');
var entry;



//link starter page to game page using button and transfer name to player
//http:stackoverflow.com/questions/17502071/transfer-data-from-one-html-file-to-another
//http://stackoverflow.com/questions/4088467/get-the-value-in-an-input-text-box
    function starter() {
      var $play = $('#input');
      var entry = $play.val();
        url = 'index.html?name=' + entry;
        document.location.href = url;
    // console.log(entry);
}

// $('body').keypress(function(e){console.log(e)}) to check keys to the console

//collision detection from http://stackoverflow.com/questions/4230029/jquery-javascript-collision-detection
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
$(document).ready(function() {

    $sharks = $('.shark');
    $shark1 = $('#shark1');
    $shark2 = $('#shark2');
    $shark3 = $('#shark3');
    $gameOver = $('#gameOver');
    $victory = $('#victory');

    $victoryButton = $('#victoryButton');
    $gameOverButton = $('#gameOverButton');
    $reload = function(e) {
      e.preventDefault();
      window.location.reload(false);
    }

    var UP = {bottom: '+=10px'}
    var DOWN = {bottom: '-=10px'}
    var LEFT = {left: '+=10px'}
    var RIGHT = {left: '-=10px'}

    var divers = [
      {
        $diver: $('#diver1'),
        controls: {119: UP, 122: DOWN, 115: LEFT, 97: RIGHT }
      },
    ]


    $victoryButton.on('click', $reload)
    $gameOverButton.on('click', $reload)

    //gameover function is present from start of game, but hidden until triggered by collision
    $gameOver.hide();
    $victory.hide();

    console.log(window.location.search)


        currentDiver.text(window.location.search.split('=')[1]);
    function handleDiverSwim(event){
      //pasreInt used to match bottom for victory when diver reaches top of screen
      if(  parseInt($(this).css('bottom') ) > $(document).height()  ) {
           console.log("you win");

            $victory.show()
      }
    }
    divers.forEach(function (d) {
      d.$diver.on('swim', handleDiverSwim)
    })

    function handleSharkMove() {
      var shark = this;
      divers.forEach(function (d) {
        if(isOverlapped(shark, d.$diver)) {
          d.$diver.trigger('collision');
        }
      })
    }

    //the 3 sharks are moving at different speeds back and forth
    function moveShark1(){
      // console.log('we movin')
      $shark1.animate({
          left: 800
        },{
          duration: 4000,
          step: handleSharkMove,
          done: $shark1.animate({
            left: Math.floor(Math.random() * 6) + 1
          },{
            duration: 2500,
            step: handleSharkMove,
            complete: moveShark1
          })
        })
      }

    moveShark1();

       function moveShark2(){
      // console.log('we movin')
      $shark2.animate({
          left: 900
        },{
          duration: 3000,
          step: handleSharkMove,
          done: $shark2.animate({
            left: Math.floor(Math.random() * 6) + 1
          },{
            duration: 2000,
            step: handleSharkMove,
            complete: moveShark2
          })
        })
      } //set shark off the screen so its outside the view, pick a new left

    moveShark2();

     function moveShark3(){
      // console.log('we movin')
      $shark3.animate({
          left: 1000
        },{
          duration: 5000,
          step: handleSharkMove,
          done: $shark3.animate({
            left: Math.floor(Math.random() * 6) + 2
          },{
            duration: 4000,
            step: handleSharkMove,
            complete: moveShark3
          })
        })
      }

    moveShark3();



//gameOver pops onto screen- becomes unhid when collision happens
   $('body')
    .on('collision', function(event) {
      // console.log("YOU GOT MAIL")
     // $playAgain.show()
      $gameOver.show()
    })
    .keypress(function(event) {
      divers.forEach(function(d) {
        if (event.which in d.controls) {
          d.$diver
            .css(d.controls[event.which])
            .trigger('swim')
        }
      })
//assign events to key to move diver triggered by a key
      console.log('event')
   });

});




