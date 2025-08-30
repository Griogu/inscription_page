import React, { useState } from 'react';
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
  const [disable, setDisable] = useState(false);

  return (
    <>
      <title>inscription page</title>
      <Button title="disable button" onClick={() => setDisable(true)} />
      <Button title="enable button" onClick={() => setDisable(false)} />
      <Button title="je suis le bouton que je pense être" disabled={disable} />
    </>
  );
}
