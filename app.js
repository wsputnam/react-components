class GroceryListItem extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	    done: false
	  };
	}

	onListItemHover() {
	  this.setState({
	  	done: !this.state.done
	  });
	}

	render() {
	  var style = {
	  	fontWeight: this.state.done ? 'bold' : 'normal'
	  };
	  return (
	  	<li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
	  );
	}
 }

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />
    )}
  </ul>
 );


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['toothpaste', 'coffee', 'shampoo']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));