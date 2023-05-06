import LoginForm from '../../components/LoginForm';
import Illustration from '../../components/ui/Illustration';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function Login() {
	useDocumentTitle('Login');

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
