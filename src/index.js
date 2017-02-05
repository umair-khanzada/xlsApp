import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App tableHeading={["Book", "Author", "Language", "Published", "Sales"]}/>,
  document.getElementById('root')
);
