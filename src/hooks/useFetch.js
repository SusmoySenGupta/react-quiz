import { useEffect, useState } from 'react';

export default function useFetch(url, method, headers) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [result, setResult] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setIsError(false);
			setIsLoading(true);

			try {
				const response = await fetch(url, {
					method: method || 'GET',
					headers: headers,
				});
				const data = await response.json();
				setResult(data);
			} catch (error) {
				setIsError(true);
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isLoading, isError, result };
}
