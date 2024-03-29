import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/index.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store }>
    <App />
  </Provider>,
);
