import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChoiceBar from './components/ChoiceBar';
import ModalDialog from './components/ModalDialog';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<ChoiceBar title="JavaScript" percent={57} />, document.getElementById('root'));
var title = { subtitle: 'ModalDialog' };
ReactDOM.render(<ModalDialog title={title} />, document.getElementById('modalMountPoint'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
