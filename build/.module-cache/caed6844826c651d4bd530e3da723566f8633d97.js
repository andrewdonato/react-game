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

  // < MiniMap />
  // document.getElementById('content')

  React.createElement("h1", null, "moose"),
  document.getElementById('content')



);
