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


// var CommentList = React.createClass({
//   render: function() {
//     return (
//       <div className="commentList">
//         Hello, world! I am a CommentList.
//       </div>
//     );
//   }
// });



React.render(
  React.createElement("h1", null, "cheesecake"),
  document.getElementById('content')
);
