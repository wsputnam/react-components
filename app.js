// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      // <ul>
      //   {this.props.Items.map(Item =>
          <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.Item}</li>
        // )}
      // </ul>
    );
  }

  // return (
  //   <ul>
  //     <li onClick={onListItemClick}> {this.props.Item}</li>
  //   </ul>
  //   );
}

var onListItemClick = (event) => {
  console.log('I got clicked');
  console.log('this', this);
};


var GroceryList = (props) => (
  <ul>
    {props.Items.map(Item => 
      <GroceryListItem Item={Item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList Items={['Coffee', 'Eggs']} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));