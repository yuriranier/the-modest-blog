import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
	return (
		<div className='blog-list'>
			{blogs.map((blog) => (
				<div className='blog-preview' key={blog.id}>
					<Link to={`/the-modest-blog/blogs/${blog.id}`}>
						<h3>{blog.title}</h3>
						<p>Written by {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
