
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



  if (this.y < 0) this.y = 0;
  if (this.x < 0) this.x = 0;
  if (this.y > landscape.height - 1) this.y = landscape.height - 1;
  if (this.x > landscape.width  - 1) this.x = landscape.width  - 1;

  console.info('moving player '+direction+' from ', from, 'to', {x:this.x, y:this.y})

  this.game.board.refreshTiles();
  return this;
};



/////////////////////////////////////////////////////////////////////////////////////
//////////////////////// React
/////////////////////////////////////////////////////////////////////////////////////

var DOM = Object.create(React.DOM);

// this is the outer most container, I would use game
DOM.Game = React.createClass({displayName: "Game",
  propTypes:{
    game: React.PropTypes.object.isRequired,
  },

  componentDidMount: function(){
    $(window).on('keydown', this.onKeydown);
  },

  componentWillUnmount: function(){
    $(window).off('keydown', this.onKeydown);
  },

  onKeydown: function(event){
    var game = this.props.game;
    console.log(event.keyCode)
    switch(event.keyCode){
      case 38 || 87: game.player.move('up');    break;
      case 40 || 83: game.player.move('down');  break;
      case 37 || 65: game.player.move('left');  break;
      case 39 || 68: game.player.move('right'); break;
    }
    this.forceUpdate();
  },

  render: function() {
    return (
      React.createElement("div", {className: "game"},
        React.createElement("h1", null, "React Game"),
        React.createElement(DOM.Board, {game: this.props.game})
      )
    );
  }
});

DOM.Board = React.createClass({displayName: "Board",
  propTypes:{
    game: React.PropTypes.object.isRequired,
  },
  render: function() {
    var game = this.props.game
    var rows = this.props.game.board.tiles.map(function(row, index){
      var tiles = row.map(function(tile, index){
        return React.createElement(DOM.Tile, {key: index, game: game, tile: tile})
      });
      return React.createElement("div", {key: index, className: "Board-row"}, tiles);
    });
    return (
      React.createElement("div", {className: "Board"}, rows)
    );
  }
});

DOM.Tile = React.createClass({displayName: "Tile",
  propTypes:{
    tile: React.PropTypes.object.isRequired,
  },
  render: function(){
    var tile = this.props.tile;
    var player = this.props.game.player;
    var value = tile.value;
    // var value = tile.x+'x'+tile.y;
    if (player.x == tile.x && player.y == tile.y){
      value = '☃'
    }
    return(
      React.createElement("div", {className: "Board-tile"},
        value
      )
    );
  }
})

DOM.Player = React.createClass({displayName: "Player",
  render: function() {
    return (
      React.createElement("div", {className: "player"},
        React.createElement("h1", null, "Player here!")
      )
    );
  }
});

$(function(){
  game = new Game();
  React.render(React.createElement(DOM.Game, {game: game}), document.body);
})

