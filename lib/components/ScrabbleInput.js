import React from 'react';
import scoreWord from '../scoreWord';

class ScrabbleInput extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <section>

        <input
        placeholder='Play word here'
        onChange={(e) => this.props.getInput(e)}
        value={this.props.currentWord}
        />

        <button
        onClick={(e) => this.props.scoreLastWord()}>
          Play Word
        </button>

      </section>
    )
  }
}

export default ScrabbleInput;
