import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Form from './Form';
import Button from './ui/Button';
import TextInput from './ui/TextInput';

export default function LoginForm() {
	const { login } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError(null);
			setIsLoading(true);
			await login(email, password);
			navigate('/');
		} catch (error) {
			setError('Failed to log in.');
			setIsLoading(false);
		}
	}

	return (
		<Form style={{ height: '330px' }} method="POST" onSubmit={handleSubmit}>
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

			<Button type="submit" disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Login'}
			</Button>

			<div className="info">
				Don't have an account? <Link ti="/sign-up">Sign up</Link>{' '}
				instead.
			</div>

			{error && (
				<p className="error" style={{ marginTop: '0.5rem' }}>
					{error}
				</p>
			)}
		</Form>
	);
}
