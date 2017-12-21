'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import { say } from 'cowsay';


class App extends React.Component {
  constructor(props) {
    super(props);

      this.handleButton = this.handleButton.bind(this);

      this.state = {
        content: 'Fred Moo!',
      }
  }

  handleButton(e) {
    console.log('Moo!');
    let randomName = faker.fake('{{name.firstName}}') + ' Moo!';
    this.setState({randomName});

  }

  render () {
    return (
      <div>
        <header><h1>Generate Cowsay Lorem</h1></header>
        <pre> {say({ text: this.state.randomName})} </pre>
        <button onClick = {this.handleButton}> Click Me Please!</button>
      </div>
    )
  }

}

ReactDom.render(<App/>, document.getElementById('root'));
