import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import ChoiceBar from './components/ChoiceBar';
import ModalDialog from './components/ModalDialog';
import VotingComponent from './components/VotingComponent';
import * as serviceWorker from './serviceWorker';

// Sample data
const vote = {
	title: 'How is your day?',
	description: 'Tell me: how has your day been so far?',
	choices: [
		{ id: 'choice_1', title: 'Good', count: 7 },
		{ id: 'choice_2', title: 'Bad', count: 12 },
		{ id: 'choice_3', title: 'Not sure yet', count: 1 }
	]
};

ReactDOM.render(<VotingComponent vote={vote} />, document.getElementById('root'));
var title = { subtitle: 'ModalDialog' };
ReactDOM.render(<ModalDialog title={title} />, document.getElementById('modalMountPoint'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
