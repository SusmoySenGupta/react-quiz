import Form from '../../components/Form';
import Button from '../../components/ui/Button';
import Illustration from '../../components/ui/Illustration';
import TextInput from '../../components/ui/TextInput';
import classes from '../../styles/Login.module.css';

export default function Login() {
	return (
		<>
			<h1>Login to your account</h1>

			<div className="column">
				<Illustration />
				<Form className={`${classes.login}`}>
					<TextInput
						type="text"
						placeholder="Enter email"
						icon="alternate_email"
					/>

					<TextInput
						type="password"
						placeholder="Enter password"
						icon="lock"
					/>

					<Button>Submit Now</Button>

					<div className="info">
						Don't have an account? <a href="signup.html">Sign up</a>{' '}
						instead.
					</div>
				</Form>
			</div>
		</>
	);
}
