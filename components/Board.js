const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  constructor(props){
    super()
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(index){
    console.log(index)
    return this.props.onClick(index)
  }
  
  render () {
    const { board, onClick, turn } = this.props;
    const fields = board.map((field, index) => {
      debugger;
      return (
        <ul>
          <li>
            <Field key={index} onClick={onClick.bind(null, index)} player={field}/>
          </li>
        </ul>
      )
    })

    return (
      <div className="board">
        {fields}
      </div>
    );
  }
}

module.exports = Board;
