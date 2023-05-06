import classes from '../styles/Answers.module.css';
import Checkbox from './ui/Checkbox';

export default function Answers({ options = [], onChange }) {
	return (
		<div className={classes.answers}>
			{options.map((option, index) => (
				<Checkbox
					key={index}
					className={classes.answer}
					label={option.title}
					value={index}
					checked={option.checked}
					onChange={(e) => onChange(e, index)}
				/>
			))}
		</div>
	);
}
