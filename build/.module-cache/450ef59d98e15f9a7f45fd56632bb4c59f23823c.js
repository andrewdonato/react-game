// React.render(
//   React.createElement('h1', null, 'Hello, world!'),
//   document.getElementById('example')
// );
largeMap = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

map = [
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 9, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
]
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
  console.log(x +":" +y)
  var rows = map.slice(y-(Board.height/2), Board.HEIGHT)

  for (var i = 0; i < rows.length; i++){
    console.log(rows[i]);
  }
};

//// creating a new game
zelda = new Game()
console.log('player initial position')
console.log(zelda.player.x + ", " + zelda.player.y)

//// player moving
console.log('player moves down')
zelda.player.move('down')
// console.log(zelda.player.x + ", " + zelda.player.y)
console.log('player moves right')
zelda.player.move('right')
// console.log(zelda.player.x + ", " + zelda.player.y)
