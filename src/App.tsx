import React from 'react';
import './App.css';

interface test {
	title: string;
	disabled?: boolean;
	onClick?: () => void;
}

function Button({title, disabled, onClick}: test) {
	return (
		<button disabled={disabled} onClick={onClick}>{title}</button>
	);
}

export default function App() {
	let disable: boolean = false;

	return (
		<>
			<title>inscription page</title>
			<Button title="disable button" onClick={() => disable = false}/>
			<Button title="enable button" onClick={() => disable = true}/>
			<Button title="je suis le bouton que je pense etre" disabled={disable}/>
		</>
	);
}
