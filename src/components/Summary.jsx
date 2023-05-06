import { useMemo } from 'react';
import SuccessImage from '../assets/images/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summary.module.css';
import Spinner from './ui/Spinner';

export default function Summary({ score, noq, questionPoint = 1 }) {
	const getKeyword = useMemo(() => {
		const percentage = (score / (noq * questionPoint)) * 100;
		if (percentage < 50) {
			return 'Failed';
		} else if (percentage < 75) {
			return 'Good';
		} else if (percentage < 100) {
			return 'Very Good';
		} else if (percentage === 100) {
			return 'Excellent';
		}
	}, [score, noq, questionPoint]);

	const { result, isLoading, isError } = useFetch(
		`https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
		'GET',
		{
			Authorization: process.env.REACT_APP_PEXELS_API_KEY,
		}
	);

	const image = result ? result?.photos[0].src.medium : SuccessImage;

	return (
		<div className={classes.summary}>
			<div className={classes.point}>
				<p className={classes.score}>
					Your score is <br />
					{score} out of {noq * questionPoint}
				</p>
				<p>
					Your badge for this quiz is <strong>{getKeyword}</strong>
				</p>
			</div>

			{isLoading && (
				<div className={classes.badge}>
					<Spinner />
					<span>Loading your badge...</span>
				</div>
			)}

			{isError && (
				<div className={classes.badge}>
					<span>Failed to load your badge</span>
				</div>
			)}

			{!isLoading && !isError && (
				<div className={classes.badge}>
					<img src={image} alt="Success" />
				</div>
			)}
		</div>
	);
}
