import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer({ videoID, title }) {
	const VIDEO_URL = `https://www.youtube.com/watch?v=${videoID}`;

	const floatingRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const toggleFloating = () => {
		if (isOpen) {
			floatingRef.current.classList.add(classes.floatingBtn);
			setIsOpen(false);
		} else {
			floatingRef.current.classList.remove(classes.floatingBtn);
			setIsOpen(true);
		}
	};

	return (
		<div
			className={`${classes.miniPlayer} ${classes.floatingBtn}`}
			ref={floatingRef}
			onClick={toggleFloating}
		>
			<span className={`material-icons-outlined ${classes.open}`}>
				play_circle_filled
			</span>
			<span
				className={`material-icons-outlined ${classes.close}`}
				onClick={toggleFloating}
			>
				close
			</span>
			<ReactPlayer
				className={classes.player}
				url={VIDEO_URL}
				width="300px"
				height="168px"
				playing={isOpen}
				controls
			/>
			<p>{title}</p>
		</div>
	);
}
