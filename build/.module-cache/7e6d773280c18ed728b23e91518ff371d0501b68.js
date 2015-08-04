// - Minimap
// - Board
//   - Tiles
// - Player
var MiniMap = React.createClass({displayName: "MiniMap",
  render: function(){
    return (
      React.createElement("div", {className: "miniMap"}, 
        "Hi, minimap here"
      )
    );
  }
});

React.render(

  React.createElement("h1", null, "cheesecake"),
  document.getElementById('content')

);
