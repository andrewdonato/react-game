// React.render(
//   React.createElement('h1', null, 'Hello, world!'),
//   document.getElementById('example')
// );


Game = function(){
  this.board = new Board(this)
  this.player = new Player(this)
};


Board = function(){
  this.game = game;
};


Player = function(){
  this.game = game;
  this.x = 10
  this.y = 10
};

Player.prototype.move = function(direction){
  if( direction === 'up'){
    this.y--;
  }
  if( direction === 'down'){
    this.y++;
  }
  if( direction === 'left'){
    this.y--;
  }
  if( direction === 'right'){
    this.y--;
  }
  this.game.board.update();
  return this;
};


Board.HEIGHT = 10
Board.WIDTH = 10
Board = function(game){
  this.game = game;
  this.tiles = [];

  var height = Board.HEIGHT;
  var width = Board.WIDTH;
  while(height--){
    while( width--){

    }
  }
}

Board.prototype.update = function(){

  var x = this.game.player.x;
  var y = this.game.player.y;

  var rows = map.slice(y-(Board.HEIGHT/2), Board.HEIGHT)

}


$("body").keydown(function(e){
    //right
    if (e.which == 39) {
        moveRight();
        rightInterval = $.timer(function(){
            moveRight();
        }, 200);
        rightInterval.play();
    }
    //left
    if (e.which == 37) {
        moveLeft();
        leftInterval = $.timer(function(){
            moveLeft();
        }, 200);
        leftInterval.play();
    }
    //up
    if (e.which == 38) {
        moveUp();
        upInterval = $.timer(function(){
            moveUp();
        }, 200);
        upInterval.play();
    }
    //down
    if (e.which == 40) {
        moveDown();
        downInterval = $.timer(function(){
            moveDown();
        }, 200);
        downInterval.play();
    }
    //right 'd'
    if (e.which == 68) {
        moveRight();
    }
    //left 'a'
    if (e.which == 65) {
        moveLeft();
    }
    //up 'w'
    if (e.which == 87) {
        moveUp();
    }
    //down 's'
    if (e.which == 83) {
        moveDown();
    }
    //sword
    if (e.which == 32) {
        doSword();
    }
    //boomerang 'z'
    if (e.which == 90) {
        doBoomerang();
    }
    //start 'q'
    if (e.which == 81) {
        doStart();
    }
    //'t'
    if (e.which == 84) {
        toggleController();
    }
    //'m'
    if (e.which == 77) {
        $("#map-builder").toggle();
    }
    //'n'
    if (e.which == 78) {
        $("#debug").toggle();
    }
});

