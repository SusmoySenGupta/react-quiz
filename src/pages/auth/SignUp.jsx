import SignUpForm from '../../components/SignUpForm';
import Illustration from '../../components/ui/Illustration';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function SignUp() {
	useDocumentTitle('Sign Up');

	return (
		<>
			<h1>Create an account</h1>
			<div className="column">
				<Illustration />
				<SignUpForm />
			</div>
		</>
	);
}
