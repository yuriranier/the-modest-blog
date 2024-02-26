import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
	return (
		<Router>
			<div className='app'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/the-modest-blog'>
							<Home />
						</Route>
						<Route path='/the-modest-blog/create'>
							<Create />
						</Route>
						<Route path='/the-modest-blog/blogs/:id'>
							<BlogDetails />
						</Route>
						<Route>
							<NotFound path='*' />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
