import React from 'react';
import ChoiceBar from './ChoiceBar';

export default function VotingComponent({ vote }) {
	const totalVotes = vote.choices.reduce((prev, curr) => prev + curr.count, 0);

	return (
		<div clasName="Row VotingRow Spacer">
			<div className="Head">
				<h1 className="Title">
					{vote.title}
					<div className="Badge">{totalVotes} Votes</div>
				</h1>
				<div className="Description Emphasis">{vote.description}</div>
                <div>
					<ChoiceBar title="JavaScript" percent={57} />
				</div>
			</div>
		</div>
	);
}