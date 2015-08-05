// - Minimap
// - Board
//   - Tiles
// - Player
var MiniMap = React.createClass({ displayName: "MiniMap",
  render: function(){
    return (
      React.createElement("div", {className: "miniMap"}, 
        "Hi, minimap here"
      )
    );
  }
});


var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});



React.render(
  React.createElement("h1", null, "cheesecake"),
  document.getElementById('content')
);
