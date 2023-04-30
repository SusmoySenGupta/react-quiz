import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
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
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/sign-up" element={<SignUp />} />
						<Route exact path="/quiz" element={<Quiz />} />
						<Route exact path="/result" element={<Result />} />
					</Routes>
				</Layout>
			</AuthProvider>
		</Router>
	);
}

export default App;
