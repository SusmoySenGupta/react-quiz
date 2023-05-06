import { Fragment } from 'react';
import classes from '../styles/Answers.module.css';
import Checkbox from './ui/Checkbox';

export default function Answers({ options = [], allowInput = true, onChange }) {
	return (
		<div className={classes.answers}>
			{options.map((option, index) => (
				<Fragment key={index}>
					{allowInput ? (
						<Checkbox
							className={classes.answer}
							label={option.title}
							value={index}
							checked={option.checked}
							onChange={(e) => onChange(e, index)}
						/>
					) : (
						<Checkbox
							className={`${classes.answer} ${
								option.correct
									? classes.correct
									: option.checked
									? classes.wrong
									: ''
							}`}
							label={option.title}
							defaultChecked={option.checked}
							disabled
						/>
					)}
				</Fragment>
			))}
		</div>
	);
}
