// - Minimap
// - Board
//   - Tiles
// - Player
paul

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

  // < MiniMap />
  // document.getElementById('content')

  React.createElement("h1", null, "cheesecake"),
  document.getElementById('content')

);
