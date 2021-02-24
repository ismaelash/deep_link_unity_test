import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <h1>My Deep Link Test page</h1>
      <p><a href="ismaelnascimento.app://mylink">Launch</a></p>
      <p><a href="ismaelnascimento.app://mylink?parameter">Launch with Parameter</a></p>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);