// React.render(
//   React.createElement('h1', null, 'Hello, world!'),
//   document.getElementById('example')
// );


Game = function(){
  this.board = new Board(this)
  this.player = new Player(this)
};

Tile = function(){
  this.game = game;
};

Board = function(game){
  this.game = game;
};


Player = function(game){
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
    this.x--;
  }
  if( direction === 'right'){
    this.x++;
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

  // var rows = map.slice(y-(Board.HEIGHT/2), Board.HEIGHT)

}

//// creating a new game
zelda = new Game()
console.log(zelda.player.x + ", " + zelda.player.y)

//// player moving
zelda.player.move('down')
console.log('player moves down')
console.log(zelda.player.x + ", " + zelda.player.y)
