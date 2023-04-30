import Layout from './components/Layout';
import Quiz from './pages/Quiz';
// import Login from './pages/auth/Login';
// import SignUp from './pages/auth/SignUp';
// import Home from './pages/Home';
import './styles/App.css';

function App() {
	return (
		<Layout>
			{/* <Home /> */}
			{/* <SignUp /> */}
			{/* <Login /> */}
			<Quiz />
		</Layout>
	);
}

export default App;
