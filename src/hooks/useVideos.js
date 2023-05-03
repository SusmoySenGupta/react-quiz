import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideos() {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchVideos() {
			const db = getDatabase();
			const videosRef = ref(db, 'videos');
			const videoQuery = query(videosRef, orderByKey());

			try {
				setIsLoading(true);
				setIsError(false);

				const snapshot = await get(videoQuery);
				if (snapshot.exists()) {
					console.log(snapshot);
					setVideos(Object.values(snapshot.val()));
				} else {
					//
				}
			} catch (err) {
				setIsError(true);
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		}

		fetchVideos();
	}, []);

	return { isLoading, isError, videos };
}
