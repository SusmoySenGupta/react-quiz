import classes from '../styles/ProgressBar.module.css';
import Button from './ui/Button';

export default function ProgressBar({ progress, onPrev, onNext, onSubmit }) {
	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton} onClick={onPrev}>
				<span className="material-icons-outlined"> arrow_back </span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip}>{progress}% Complete!</div>
				<div className={classes.rangeBody}>
					<div
						className={classes.progress}
						style={{ width: `${progress}%` }}
					></div>
				</div>
			</div>
			<Button
				className="next"
				onClick={progress === 100 ? onSubmit : onNext}
				style={{ marginRight: '10px' }}
			>
				{progress === 100 ? (
					<span>Submit</span>
				) : (
					<>
						<span>Next Question</span>
						<span className="material-icons-outlined">
							arrow_forward
						</span>
					</>
				)}
			</Button>
		</div>
	);
}
