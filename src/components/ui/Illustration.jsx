import SignUpImage from '../../assets/images/signup.svg';
import classes from '../../styles/SignUp.module.css';

export default function Illustration() {
	return (
		<div className={classes.illustration}>
			<img src={SignUpImage} alt="Sign up" />
		</div>
	);
}
