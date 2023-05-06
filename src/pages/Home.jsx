import Videos from '../components/video/Videos';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home() {
	useDocumentTitle('Home');

	return <Videos />;
}
