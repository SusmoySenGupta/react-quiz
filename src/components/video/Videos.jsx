import useVideos from '../../hooks/useVideos';
import classes from '../../styles/Videos.module.css';
import Video from './Video';

export default function Videos() {
	const { isLoading, isError, videos } = useVideos();

	// Decide what to render based on the state of the request
	let content = null;
	if (isLoading) {
		content = <div>Loading...</div>;
	} else if (isError) {
		content = <div>Error</div>;
	} else if (videos.length === 0) {
		content = <div>No videos found</div>;
	} else {
		content = videos.map((video, index) => (
			<Video key={video.youtubeID} video={video} />
		));
	}

	return <div className={classes.videos}>{content}</div>;
}
