import SuccessImage from '../assets/images/success.png';
import classes from '../styles/Summary.module.css';

export default function Summary({ score, noq, questionPoint = 1 }) {
	return (
		<div className={classes.summary}>
			<div className={classes.point}>
				<p className={classes.score}>
					Your score is <br />
					{score} out of {noq * questionPoint}
				</p>
			</div>

			<div className={classes.badge}>
				<img src={SuccessImage} alt="Success" />
			</div>
		</div>
	);
}
