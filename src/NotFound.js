import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className='not-found'>
			<h2>Sorry</h2>
			<p>This page cannot be found :(</p>
			<Link to='/the-modest-blog'>Back to the Home page...</Link>
		</div>
	);
}

export default NotFound;
