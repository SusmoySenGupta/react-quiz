import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useAnswers(videoID) {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		async function fetchAnswers() {
			const db = getDatabase();
			const answerRef = ref(db, `answers/${videoID}/questions`);
			const answersQuery = query(answerRef, orderByKey());

			try {
				setIsError(false);
				setIsLoading(true);

				const snapshot = await get(answersQuery);
				if (snapshot.exists()) {
					setAnswers((prevAnswers) => {
						return [
							...prevAnswers,
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

		fetchAnswers();
	}, [videoID]);

	return {
		isLoading,
		isError,
		answers,
	};
}
