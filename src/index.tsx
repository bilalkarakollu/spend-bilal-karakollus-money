import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { CssBaseline } from '@mui/material';
import App from './App';
import rootReducer from './store';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}><CssBaseline/><App /></Provider>
);