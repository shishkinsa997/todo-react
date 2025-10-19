import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.scss';
import './styles/style.scss';
import './custom.d.ts';
import { TodoListPage } from './pages/TodoListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoListPage />
  </React.StrictMode>
);