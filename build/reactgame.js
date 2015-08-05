
var DOM = Object.create(React.DOM);

////  Creates the outer most shell component
////  The boss object
DOM.Game = React.createClass({displayName: "Game",

  ////  A propType is a validator to check that the data received is correct.
  propTypes:{
    game: React.PropTypes.object.isRequired,
  },

  ////  This and componentWillMount(not seen here because there is no server) are invoked only once
  ////  This one is invoked after the initial rendering
  componentDidMount: function(){
    $(window).on('keydown', this.onKeydown);
  },

  ////  This is invoked right before a component is unmounted from the DOM
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

    ////  this forces React to re-render without waiting for shouldComponentUpdate
    ////  shouldComponentUpdate updates whenever new props or states are received.
    this.forceUpdate();
  },

  render: function() {
    ////  returns child
    return (
      React.createElement("div", {className: "game"}, 
        React.createElement("h1", null, "React Game"), 
        React.createElement(DOM.Board, {game: this.props.game})
      )
    );
  }
});


////  This creates the board class
DOM.Board = React.createClass({displayName: "Board",
  propTypes:{
    game: React.PropTypes.object.isRequired,
  },
  render: function() {
    var game = this.props.game
    var rows = this.props.game.board.tiles.map(function(row, index){
      var tiles = row.map(function(tile, index){

        ////  returns child => Tile
        return React.createElement(DOM.Tile, {key: index, game: game, tile: tile})
      });
      ////  returns child container => row
      return React.createElement("div", {key: index, className: "Board-row"}, tiles);
    });
    ////  container of rows => The Board
    return (
      React.createElement("div", {className: "Board"}, rows)
    );
  }
});

////  This creates the tile class
DOM.Tile = React.createClass({displayName: "Tile",
  propTypes:{
    tile: React.PropTypes.object.isRequired,
  },

  render: function(){
    var tile = this.props.tile;
    var player = this.props.game.player;
    var value = tile.value;

    ////  this creates a representation of the player object in the players positioning
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


////  this renders the whole board
$(function(){
  game = new Game();
  React.render(React.createElement(DOM.Game, {game: game}), document.body);
})




