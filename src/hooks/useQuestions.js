import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuestions(videoID) {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function fetchQuestions() {
			const db = getDatabase();
			const questionsRef = ref(db, `quiz/${videoID}/questions`);
			const questionsQuery = query(questionsRef, orderByKey());

			try {
				setIsError(false);
				setIsLoading(true);

				const snapshot = await get(questionsQuery);
				if (snapshot.exists()) {
					setQuestions((prevVideos) => {
						return [
							...prevVideos,
							...Object.values(snapshot.val()),
						];
					});
				}
			} catch (err) {
				console.log(err);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		fetchQuestions();
	}, [videoID]);

	return {
		isLoading,
		isError,
		questions,
	};
}
