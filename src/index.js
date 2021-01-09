import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Titlebar from './components/electron/Titlebar';

ReactDOM.render(<Titlebar title={'Diagnostics'}/>, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));