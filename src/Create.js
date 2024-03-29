import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Mario');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsPending(true);

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log('New Blog Added');
			setIsPending(false);
			history.push('/the-modest-blog');
		});
	};

	return (
		<div className='create'>
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title</label>
				<input
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog author</label>
				<select required value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value='Mario'>Mario</option>
					<option value='Yoshi'>Yoshi</option>
				</select>
				{title && body && (
					<div className='create-preview'>
						<fieldset>
							<legend>Blog Preview</legend>
							<h2>{title}</h2>
							<p>Written by {author}</p>
							<p className='body'>{body}</p>
						</fieldset>
					</div>
				)}
				{!isPending && <button>Publish</button>}
				{isPending && <button disabled>Posting...</button>}
			</form>
		</div>
	);
};

export default Create;
