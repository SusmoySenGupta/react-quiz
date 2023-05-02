import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Form from './Form';
import Button from './ui/Button';
import Checkbox from './ui/Checkbox';
import TextInput from './ui/TextInput';

export default function SignUpForm() {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [agree, setAgree] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const { signUp } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			return setError('Passwords do not match');
		}

		try {
			setError('');
			setIsLoading(true);
			await signUp(email, password, username);
			navigate('/');
		} catch (error) {
			setError('Failed to create an account.');
			setIsLoading(false);
		}
	};

	return (
		<Form style={{ height: '500px' }} method="POST" onSubmit={handleSubmit}>
			<TextInput
				type="text"
				placeholder="Enter username"
				icon="person"
				required
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>

			<TextInput
				type="email"
				placeholder="Enter email"
				icon="alternate_email"
				required
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>

			<TextInput
				type="password"
				placeholder="Enter password"
				icon="lock"
				required
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<TextInput
				type="password"
				placeholder="Confirm password"
				icon="lock_clock"
				required
				value={confirmPassword}
				onChange={(e) => {
					setConfirmPassword(e.target.value);
				}}
			/>

			<Checkbox
				label="I agree to the Terms &amp; Conditions"
				required
				checked={agree}
				onChange={(e) => {
					setAgree(e.target.checked);
				}}
			/>

			<Button type="submit" disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Sign Up'}
			</Button>

			<div className="info">
				Already have an account? <Link to="/login">Login</Link> instead.
			</div>

			{error && (
				<p className="error" style={{ marginTop: '0.5rem' }}>
					{error}
				</p>
			)}
		</Form>
	);
}
