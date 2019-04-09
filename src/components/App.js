import React, { Component, Fragment } from 'react';
import Header from './Header';
import OptionCard from './OptionCard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title="Guerra de lenguajes" />
        <section>
          <OptionCard option="piedra"/>
          <OptionCard option="papel"/>
          <OptionCard option="tijera"/>
        </section>
      </Fragment>
    );
  }
}

export default App;
