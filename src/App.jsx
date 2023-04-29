import Layout from './components/Layout';
import Login from './pages/auth/Login';
// import SignUp from './pages/auth/SignUp';
// import Home from './pages/Home';
import './styles/App.css';

function App() {
	return (
		<Layout>
			{/* <Home /> */}
			{/* <SignUp /> */}
			<Login />
		</Layout>
	);
}

export default App;
