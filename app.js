// TODO
class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover : false
    };
  }

  onListItemClick() {
    this.setState( {hover: !this.state.hover} );
  }


  render () {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    // console.log(this.props.item);
    return (<li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>);
  };

}

var Grocerylist = (props) => (
  <div>
    <h2>GROCERY LIST</h2>
      <ul>
        {props.list.map( function (item) {
          // console.log(item);
          return <GroceryListItem item={item} />
        })}
      </ul>
  </div>
);


var list = ['cucumber', 'kale']
ReactDOM.render(<Grocerylist list={list} />, document.getElementById("app"));