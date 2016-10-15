const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board:[null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeTurn = this.changeTurn.bind(this)
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board:[null, null, null, null, null, null, null, null, null],
      turn: 'X'
    })
  }
  
  changeTurn(char){
    return (char == "X" ? "O" : "X")
  }
  
  handleClick (i, ev) {
    ev.preventDefault()
    let newBoard = Object.assign([], this.state.board)
    newBoard[i] = this.state.turn
    this.setState({
      board: newBoard,
      turn: this.changeTurn(this.state.turn)
    })
 
  }

  getWinner () {
    const matches = solutions.map( (solutionRow) => ( 
      solutionRow.map((index) => this.state.board[index]).join('')
    ))
  
   const check = matches.find( (match) => match == 'XXX' || match == 'OOO')

    return check && check[0]
  }

  isComplete () {
    return this.state.board.every((field) => field) 
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} turn={this.state.turn}/>
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null }
        <button className='game__reset' onClick={this.handleReset} />
      </div>
    );
  }
}

module.exports = Game;
