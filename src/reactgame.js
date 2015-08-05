
var DOM = Object.create(React.DOM);


DOM.Game = React.createClass({
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
      <div className="game">
        <h1>React Game</h1>
        <DOM.Board game={this.props.game} />
      </div>
    );
  }
});

DOM.Board = React.createClass({
  propTypes:{
    game: React.PropTypes.object.isRequired,
  },
  render: function() {
    var game = this.props.game
    var rows = this.props.game.board.tiles.map(function(row, index){
      var tiles = row.map(function(tile, index){
        return <DOM.Tile key={index} game={game} tile={tile} />
      });
      return <div key={index} className="Board-row">{tiles}</div>;
    });
    return (
      <div className="Board">{rows}</div>
    );
  }
});

DOM.Tile = React.createClass({
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
      <div className="Board-tile">
        {value}
      </div>
    );
  }
})

DOM.Player = React.createClass({
  render: function() {
    return (
      <div className="player">
        <h1>Player here!</h1>
      </div>
    );
  }
});

$(function(){
  game = new Game();
  React.render(<DOM.Game game={game} />, document.body);
})




