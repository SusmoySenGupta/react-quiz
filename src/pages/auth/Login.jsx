import LoginForm from '../../components/LoginForm';
import Illustration from '../../components/ui/Illustration';

export default function Login() {
	return (
		<>
			<h1>Login to your account</h1>

			<div className="column">
				<Illustration />
				<LoginForm />
			</div>
		</>
	);
}
