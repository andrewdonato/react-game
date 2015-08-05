// - Minimap
// - Board
//   - Tiles
// - Player
var MiniMap = React.createClass({ displayName: "MiniMap",
  render: function(){
    return (
      <div className="miniMap">
        Hi, minimap here
      </div>
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
  <Minimap />,
  document.getElementById('content')
);
