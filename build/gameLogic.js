
var smallMap = [
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7],
  [4, 5, 6, 7, 8],
];

var mediumMap = [
  ['','','', '', '', '', '', '', '', '', '', '', '',],     // 0
  ['','','', '', '', '', '', '', '', '', '', '', '',],     // 0
  ['','','walls', 'walls', 'walls', 'walls', 'walls', 'walls', 'walls', 'walls', 'walls', '', '',],     // 0
  ['','','walls', 'doom!', 'doom!', 'doom!', 'doom!', 'doom!', 'doom!', 'doom!', 'doom!', '', '',],     // 1
  ['','','walls', 'doom!', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'walls', '', '',],     // 2
  ['','','walls', 'doom!', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'walls', '', '',],     // 3
  ['','','walls', 'doom!', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'walls', '', '',],     // 4
  ['','','walls', 'doom!', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'walls', '', '',],     // 5
  ['','','walls', 'doom!', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'walls', '', '',],     // 6
  ['','','walls', 'doom!', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'walls', '', '',],     // 7
  ['','','walls', 'doom!', 'walls', 'walls', 'walls', 'walls', 'walls', 'walls', 'walls', '', '',],     // 8
  ['','','', '', '', '', '', '', '', '', '', '', '',],     // 0
  ['','','', '', '', '', '', '', '', '', '', '', '',],     // 0

]
var fogWar = [
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 0
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 1
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 2
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 3
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 4
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 5
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 6
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 7
  ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'],     // 8
]

BOARD_HEIGHT = 5;
BOARD_WIDTH  = 5;

Game = function(){
  this.landscape = new Landscape(this, mediumMap);
  this.board = new Board(this);
  this.player = new Player(this, 4,4);
  this.board.refreshTiles();
};

Landscape = function(game, spec){
  this.game = game

  //// populates the landscape with new tiles
  this.tiles = spec.map(function(row, y){
    return row.map(function(value, x){
      return new Tile(game, {x:x,y:y}, value);
    });
  });
  this.height = this.tiles.length;
  this.width  = this.tiles[0].length;
}

Board = function(game){
  this.game = game;
  this.tiles = [];
};


Board.prototype.refreshTiles = function(){
  var
    player = this.game.player,

    yFrom  = player.y-Math.floor(BOARD_HEIGHT/2),
    yTo    = yFrom + BOARD_HEIGHT,
    xFrom  = player.x-Math.floor(BOARD_WIDTH/2),
    xTo    = xFrom + BOARD_WIDTH;


  //// this is the fix for the slice disappearing the board when you go to the top or on the left.
  if (yFrom <= 1){yFrom = 0}
  if (xFrom <= 1){xFrom = 0}

  //// populates the visible board with the tiles from the landscape
  var rows   = this.game.landscape.tiles.slice(yFrom, yTo);
  var tiles  = rows.map(function(row){ return row.slice(xFrom, xTo); });

  this.tiles = tiles;
  return this;
};



Tile = function(game, options, value){
  this.game = game;
  this.x = options.x
  this.y = options.y
  this.value = value
};

Player = function(game, x, y){
  this.game = game;
  this.x = x;
  this.y = y;
};

Player.prototype.move = function(direction){

  var from = {x:this.x, y:this.y}

  if (direction === 'up'   ) this.y--;
  if (direction === 'down' ) this.y++;
  if (direction === 'left' ) this.x--;
  if (direction === 'right') this.x++;

  var landscape = this.game.landscape;


  //// logic that prevents the player from going off the landscape
  if (this.y < 0) this.y = 0;
  if (this.x < 0) this.x = 0;
  if (this.y > landscape.height - 1) this.y = landscape.height - 1;
  if (this.x > landscape.width  - 1) this.x = landscape.width  - 1;

  console.info('moving player '+direction+' from ', from, 'to', {x:this.x, y:this.y})

  this.game.board.refreshTiles();
  return this;
};
