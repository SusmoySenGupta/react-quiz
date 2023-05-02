import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PublicOutlet({ redirectPath = '/' }) {
	const { currentUser } = useAuth();

	return currentUser ? <Navigate to={redirectPath} replace /> : <Outlet />;
}
