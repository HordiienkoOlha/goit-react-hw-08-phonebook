import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { store } from './redux/store';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import { Spinner } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<Spinner />} persistor={persistor}> */}
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);