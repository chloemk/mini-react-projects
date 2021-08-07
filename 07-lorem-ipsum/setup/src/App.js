import React, { useState } from 'react';
import data from './data';
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count); //인풋에 들어오는 값은 type=number로 설정해도 문자열로 들어온다. 그래서 숫자로 바꿔준다.
		if (count <= 0) amount = 1;
		if (count > 8) amount = 8;
		setText(data.slice(0, amount));
	};

	return (
		<section className='section-center'>
			<h3>tired of boring lorem ipsum?</h3>
			<form className='lorem-form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>paragraphs:</label>
				<input
					type='number'
					name='amount'
					id='amount'
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button type='submit' className='btn'>
					generate
				</button>
			</form>
			<article className='lorem-text'>
				{text.map((cur, idx) => {
					return <p key={idx}>{cur}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
