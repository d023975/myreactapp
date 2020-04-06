import React from 'react';
import ChoiceBar from './ChoiceBar';
//object destructuring in function signature
//get vote and not all properties
export default function VotingComponent({ vote: firstVote }) {

	const [ vote, setVote ] = React.useState(firstVote);
	const totalVotes = vote.choices.reduce((acc, curr) => acc + curr.count, 0);

	function registerChoice(choice) {
		setVote({
      ...vote, // destructure object, title and description goes here
      choices: vote.choices.map((c) => (choice.id !== c.id ? c : { ...choice, // id + title
                                                                    count: choice.count + 1 })) //count
		});
	}

	return (
		<div className="Row VotingRow Spacer">
			<div className="Head">
				<h1 className="Title">
					{vote.title}
					<div className="Badge">{totalVotes} Votes</div>
				</h1>
				<div className="Description Emphasis">{vote.description}</div>
			</div>
			<div>
				{vote.choices.map((choice) => (
					<ChoiceBar
						key={choice.id}
						title={choice.title}
						percent={choice.count * (100 / totalVotes)}
						count={choice.count}
						onClickHandler={() => registerChoice(choice)}
					/>
				))}
			</div>
		</div>
	);
}
