import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Titlebar from './components/Titlebar';

ReactDOM.render(<Titlebar title={'Diagnostics'}/>, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));