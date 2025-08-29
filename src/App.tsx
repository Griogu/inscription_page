import React from 'react';
import './App.css';

function Button({title}: {title: string}) {
	return (
		<button>{title}</button>
	);
}

export default function App() {
	return (
		<>
			<title>inscription page</title>
			<Button title="test" />
		</>
	);
}
