import React from 'react';
import ReactDOM from 'react-dom';

export default function ModalDialog({title}) {
	return ReactDOM.createPortal(  // ! returns true so components is not rendered
		!<div className="ModalDialog"> 
			<h1>{title.subtitle}</h1>
			<button>close</button>
		</div>,
		document.getElementById('modalMountPoint')
	);
}
