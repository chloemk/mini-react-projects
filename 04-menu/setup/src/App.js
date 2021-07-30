import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//Set을 이용해 중복 제거
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const filtered = items.filter((cur) => cur.category === category);
		setMenuItems(filtered);
		console.log(filtered);
	};

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Menus</h2>
					<div className='underline'></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
