import SignUpForm from '../../components/SignUpForm';
import Illustration from '../../components/ui/Illustration';

export default function SignUp() {
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
