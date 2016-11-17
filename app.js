import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './hello';
import './app.css';

console.log('hello!');

ReactDOM.render(
  <Hello name="Hello world!"/>,
  document.getElementById('test')
);
