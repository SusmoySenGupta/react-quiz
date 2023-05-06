import { useRef, useState } from 'react';
import classes from '../styles/ProgressBar.module.css';
import Button from './ui/Button';

export default function ProgressBar({ progress, onPrev, onNext, onSubmit }) {
	const [showTooltip, setShowTooltip] = useState(false);
	const tooltipRef = useRef(null);

	const toggleTooltip = () => {
		if (showTooltip) {
			setShowTooltip(false);
			tooltipRef.current.style.display = 'none';
		} else {
			setShowTooltip(true);
			tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
			tooltipRef.current.style.display = 'block';
		}
	};

	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton} onClick={onPrev}>
				<span className="material-icons-outlined"> arrow_back </span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip} ref={tooltipRef}>
					{progress}% Complete!
				</div>
				<div className={classes.rangeBody}>
					<div
						className={classes.progress}
						style={{ width: `${progress}%` }}
						onMouseOver={toggleTooltip}
						onMouseOut={toggleTooltip}
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
