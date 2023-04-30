import classes from '../styles/Answers.module.css';
import Checkbox from './ui/Checkbox';

export default function Answers() {
	return (
		<div className={classes.answers}>
			<Checkbox className={classes.answer} label="A New Hope 1" />
		</div>
	);
}
