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

