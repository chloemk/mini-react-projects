import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ text }) => {
	const { title, info } = text;
	const [showInfo, setShowInfo] = useState(false);

	return (
		<article className='question'>
			<header>
				<h4>{title}</h4>
				{/* 버튼 기본값은 false, 마이너스 사인을 누르면 인포들이 안보이고, 플러스 사인을 누르면 인포들이 보여야 한다.  */}
				<button className='btn' onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
				</button>
			</header>
			{showInfo && <p>{info}</p>}
		</article>
	);
};

export default Question;
