import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
	const [text, setText] = useState(data);

	return (
		<main>
			<div className='container'>
				<h3>Q&A</h3>
				<section className='info'>
					{text.map((cur) => {
						return <SingleQuestion key={cur.id} text={cur} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
