// *** REACT W/O REDUX ***

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import '../node_modules/grommet/scss/vanilla/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// *** REACT W/ REDUX ***

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './components/App/App';
// import './index.css';

// import '../node_modules/grommet/scss/vanilla/index.scss';


// ReactDOM.render(
//   <Provider store={store}><App /></Provider>,
//   document.getElementById('root')
// );
