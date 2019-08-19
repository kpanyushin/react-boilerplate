import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Footer from '_components/Footer';

import styles from './App.scss';

@CSSModules(styles, { allowMultiple: true })

class App extends Component {
  render() {
    return (
      <div styleName="root background">
        <h1>React boilerplate</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
