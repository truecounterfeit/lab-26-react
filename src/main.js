'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
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

      this.state = {
        content: 'Click Me!'
      }
    }

      // function cowsaysWhat() {
      //   console.log('Moo');
      //   this.setState({content:'The cow says Moo!'})
      // };

      render () {
        return (
          <div>
          <Heading />
            <pre>{say({ text: this.state.content})}</pre>
          <button onClick = {this.state.content}> Click Me!</button>
          </div>
        )
      }

}

ReactDom.render(<App/>, document.getElementById('root'));
