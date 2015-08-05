
var DOM = Object.create(React.DOM);


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




