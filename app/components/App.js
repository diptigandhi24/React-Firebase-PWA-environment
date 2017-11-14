var React=require('react');
var ReactDOM = require('react-dom');
var HomeScreen=require('./homescreen.js');
var style = require('./styles/style.css');



// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <h1>Hello, world!</h1>
//     );
//   }
// };

// module.exports= ShoppingList;
console.log(style);

function display(){
	return(
	<div className={style.test}>
	<h1>hello World 111!!!!</h1>
	<p>This a test to check</p>
	<HomeScreen/>
	</div>
	)
}
module.exports = display;