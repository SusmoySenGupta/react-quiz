import { useEffect } from 'react';

export default function useDocumentTitle(newTitle = '') {
	const prefix = process.env.REACT_APP_APP_NAME || 'React App';
	const title = prefix + ' | ' + newTitle;

	useEffect(() => {
		document.title = title;
	}, [title]);
}
