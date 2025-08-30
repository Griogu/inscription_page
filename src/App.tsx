import React, { useState } from 'react';
import './App.css';

function FirstNameInput({ value, onChange }:
	{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label>
      First Name:
      <input className="firstname"
	  			placeholder="John"
	  			type="text"
				value={value}
				onChange={onChange}
				/>
    </label>
  );
}

function LastNameInput({ value, onChange }:
	{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label>
      Last Name:
      <input className="lastname"
	  			placeholder="Doe"
	  			type="text"
				value={value}
				onChange={onChange}
				/>
    </label>
  );
}

function EmailInput({ value, onChange }:
	{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
	return (
		<label>
		  Email:
		  <input className="email"
		  			placeholder="JohnDoe@gmail.com"
		  			type="email"
					value={value}
					onChange={onChange}/>
		</label>
	);
}

function PasswordInput({ value, onChange }:
					   { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
	return (
		<label>
		  Password:
		  <input className="password"
		  			placeholder="Password"
		  			type="password"
					value={value}
					onChange={onChange}/>
		</label>
	);
}

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
	  <title>Inscription page</title>
	  <h1 className="header">Inscription page</h1>
      <FirstNameInput value={firstName}
	  					onChange={(e) => setFirstName(e.target.value)}
						/>
      <LastNameInput value={lastName}
	  					onChange={(e) => setLastName(e.target.value)}
						/>
	  <EmailInput value={email}
					onChange={(e) => setEmail(e.target.value)}
					/>
	  <PasswordInput value={password}
	  					onChange={(e) => setPassword(e.target.value)}
						/>
    </div>
  );
}

