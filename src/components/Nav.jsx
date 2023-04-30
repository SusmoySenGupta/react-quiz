import { Link } from 'react-router-dom';
import AppLogo from '../assets/images/s-logo-circle.png';
import classes from '../styles/Nav.module.css';
import Account from './Account';

export default function Nav() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<Link to="/" className={classes.brand}>
						<img src={AppLogo} alt="Application Logo" />
						<h3>React Quiz</h3>
					</Link>
				</li>
			</ul>
			<Account />
		</nav>
	);
}
