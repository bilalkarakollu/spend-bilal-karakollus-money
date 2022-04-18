import ReactDOM from 'react-dom/client';


import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}><CssBaseline/><App /></Provider>
);