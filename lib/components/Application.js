import React from 'react';
import ScrabbleInput from './ScrabbleInput'
import scoreWord from '../scoreWord'


class Application extends React.Component {

  constructor() {
    super();
    this.state = {
      lastScoredWord: null,
      lastWordScore: null,
      totalScore: 0,
      currentWord: '',
    }
  }

  getWordInput(event) {
    this.setState({currentWord: event.target.value})
    // this.setState({ lastWord: event.target.value })
  }

  getLastWordScore() {
    const { currentWord, totalScore } = this.state;
    let wordScore = scoreWord(currentWord);
    let newScore = wordScore + totalScore;
    this.setState({ lastWordScore: wordScore, currentWord: '', lastWord: currentWord, totalScore: newScore })
  }

  clearScores() {
    this.setState({ lastWordScore: 0, totalScore: 0})
  }


  render() {
      return (
        <section>
          <h1>BOUT TO SCRABBLE IT UP</h1>
          <ScrabbleInput
          getInput = {(e) => this.getWordInput(e)}
          scoreLastWord={(e) => this.getLastWordScore()}
          lastWord={this.state.lastWord}
          currentWord={this.state.currentWord}/>

        <h2>Last word: {this.state.lastWord} </h2>
        <h3>Last word score: {this.state.lastWordScore}</h3>
        <h4>Total game score: {this.state.totalScore}</h4>
        <button
        onClick={() => this.clearScores()}
        >
          Clear Scores
        </button>
        </section>
      )
  }
}

export default Application;
