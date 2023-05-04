import {
	get,
	getDatabase,
	limitToFirst,
	orderByKey,
	query,
	ref,
	startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideos(page = 1, limit = 10) {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [videos, setVideos] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		async function fetchVideos() {
			const db = getDatabase();
			const videosRef = ref(db, 'videos');
			const videoQuery = query(
				videosRef,
				orderByKey(),
				startAt('' + page),
				limitToFirst(limit)
			);

			try {
				setIsError(false);
				setIsLoading(true);

				const snapshot = await get(videoQuery);
				if (snapshot.exists()) {
					setVideos((prevVideos) => {
						return [
							...prevVideos,
							...Object.values(snapshot.val()),
						];
					});
				} else {
					setHasMore(false);
				}
			} catch (err) {
				console.log(err);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		setTimeout(() => {
			fetchVideos();
		}, 2000);
	}, [page, limit]);

	return {
		isLoading,
		isError,
		videos,
		hasMore,
	};
}
