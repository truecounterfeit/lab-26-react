'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import { say } from 'cowsay';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

      this.handleButton = this.handleButton.bind(this);

      this.state = {
        content: faker.random.firstName + ' Moo!'
      }
  }

  handleButton(e) {
    console.log('Moo!');
    { say (
      {text: this.state.content}
    )};

  }

  // function cowsaysWhat() {
  //   console.log('Moo');
  //   this.setState({says:'The cow says Moo!'})
  // };

  render () {
    return (
      <div>
      <Header />
      // <pre>{say({ text: this.state.content})}</pre>
      <button onClick = {this.handleButton}> Click Me Please!</button>
      </div>
    )
  }

}

ReactDom.render(<App/>, document.getElementById('root'));
