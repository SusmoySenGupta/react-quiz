import { Link } from 'react-router-dom';
import classes from '../../styles/Videos.module.css';

export default function Video({ video }) {
	const { youtubeID, title, noq } = video || {};
	const imageSource = `http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`;

	return (
		<Link to={`/quiz/${youtubeID}`} state={{ videoTitle: title }}>
			<div className={classes.video}>
				<img src={imageSource} alt={title} />
				<p>{title}</p>
				<div className={classes.qmeta}>
					<p>{noq} Questions</p>
					<p>Score : Not taken yet</p>
				</div>
			</div>
		</Link>
	);
}
