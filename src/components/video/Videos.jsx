import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useVideos from '../../hooks/useVideos';
import Spinner from '../ui/Spinner';
import Video from './Video';

export default function Videos() {
	const PER_PAGE = +process.env.REACT_APP_VIDEOS_PER_PAGE;
	const [page, setPage] = useState(1);
	const { isLoading, isError, videos, hasMore } = useVideos(page, PER_PAGE);

	return (
		<div>
			{videos.length > 0 && (
				<InfiniteScroll
					dataLength={videos.length}
					hasMore={hasMore}
					next={() => setPage(page + PER_PAGE)}
					loader={<Spinner />}
				>
					{videos.map((video) => (
						<Video key={video.youtubeID} video={video} />
					))}
				</InfiniteScroll>
			)}
			{!isLoading && videos.length === 0 && <div>No data found!</div>}
			{isError && <div>There was an error!</div>}
			{isLoading && <div>Loading...</div>}
		</div>
	);
}
