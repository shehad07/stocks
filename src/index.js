import React from 'react';
import ReactDOM from 'react-dom';

import Stock from './components/Stock';

const App = () => {
  return <Stock />;
}

ReactDOM.render(<App />, document.querySelector('.container'));
