import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Counter from './components/counter/counter.js';
import './styles/reset.css';
import './styles/base.scss';
import './styles/layout.scss';
import './styles/modules.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
