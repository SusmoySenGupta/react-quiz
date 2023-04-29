import Form from '../../components/Form';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import Illustration from '../../components/ui/Illustration';
import TextInput from '../../components/ui/TextInput';
import classes from '../../styles/SignUp.module.css';

export default function SignUp() {
	return (
		<>
			<h1>Create an account</h1>
			<div className="column">
				<Illustration />
				<Form className={classes.signup}>
					<TextInput
						type="text"
						placeholder="Enter name"
						icon="person"
					/>

					<TextInput
						type="email"
						placeholder="Enter email"
						icon="alternate_email"
					/>

					<TextInput
						type="password"
						placeholder="Enter password"
						icon="lock"
					/>

					<TextInput
						type="password"
						placeholder="Confirm password"
						icon="lock_clock"
					/>

					<Checkbox label="I agree to the Terms &amp; Conditions" />

					<Button type="submit">
						<span>Sign up</span>
					</Button>

					<div className="info">
						Already have an account? <a href="login.html">Login</a>{' '}
						instead.
					</div>
				</Form>
			</div>
		</>
	);
}
