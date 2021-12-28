import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapProvider from '@bootstrap-styled/provider';
//import makeTheme from 'bootstrap-styled/lib/theme/makeTheme';

import App from './App/App';

import { Provider } from 'react-redux';

import { store } from './store';

// const appTheme = makeAppTheme({
//   '$body-bg': '#fff'
// })

ReactDOM.render(
  <BootstrapProvider theme={{ '$brand-danger': 'green' }}>
    <Provider store={store}>
      <App />
    </Provider>
  </BootstrapProvider>,
  document.getElementById('root')
);
