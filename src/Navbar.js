import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<h1>The Modest Blog</h1>
			<div className='links'>
				<Link to='/the-modest-blog'>Home</Link>
				<Link to='/the-modest-blog/create' className='create-link'>
					Write
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
