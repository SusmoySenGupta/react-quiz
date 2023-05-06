import { Link } from 'react-router-dom';
import classes from '../../styles/Videos.module.css';

const EACH_QUESTION_POINT = 5;

export default function Video({ video }) {
	const { youtubeID, title, noq } = video || {};
	const imageSource = `http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`;
	const totalPoints = noq * EACH_QUESTION_POINT;

	return (
		<Link
			to={`/quiz/${youtubeID}`}
			state={{ videoTitle: title }}
			style={{ pointerEvents: noq === 0 ? 'none' : 'auto' }}
		>
			<div className={classes.video}>
				<img src={imageSource} alt={title} />
				<p>{title}</p>
				<div className={classes.qmeta}>
					<p>{noq} Questions</p>
					<p>Total points: {totalPoints}</p>
				</div>
			</div>
		</Link>
	);
}
