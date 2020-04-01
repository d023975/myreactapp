import React from 'react';

export default function ChoiceBar({ title, percent }) {
	//Create state , 0 is the initial value
	const [ count, setCount ] = React.useState(0);

	function handleClick(e) {
		// e is a react event e.nativeEvent is the native DOM-Event
		setCount(count + 1);
	}

	return (
		<div className="ChoiceBar" onClick={handleClick}>
			<div className="Progress" style={{ width: percent + '%' }}>
				<div className="ChoiceBarTitle">{title}</div>
			</div>
			<div className="ChoiceBarBadge">{count}</div>
		</div>
	);
}
