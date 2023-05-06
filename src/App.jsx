import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateOutlet from './components/PrivateOutlet';
import PublicOutlet from './components/PublicOutlet';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import './styles/App.css';

function App() {
	return (
		<Router>
			<AuthProvider>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/*" element={<PublicOutlet />}>
							<Route path="login" element={<Login />} />
							<Route path="sign-up" element={<SignUp />} />
						</Route>

						<Route path="/*" element={<PrivateOutlet />}>
							<Route path="quiz/:videoID" element={<Quiz />} />
							<Route path="result/:userID" element={<Result />} />
						</Route>
					</Routes>
				</Layout>
			</AuthProvider>
		</Router>
	);
}

export default App;
