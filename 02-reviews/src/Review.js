import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    let indices = Array.from({ length: people.length }, (_, idx) => idx); //배열의 길이가 5면, [0, 1, 2, 3, 4]. 배열의 길이만큼 매핑해서 인덱스들을 배열에 넣는 방식.

    //데이터 배열은 3번째 인덱스까지 있고, 무한대로 앞으로 뒤로 버튼 누르는게 가능하기 위해(루프형식으로), 마지막 인덱스에 올 경우, 인덱스를 0으로 세팅해주고, 인덱스가 0일 경우엔 3으로 세팅해준다.
    const nextHandler = () => {
        if (index === 3) {
            setIndex(0);
        } else {
            let i = index;
            i++;
            setIndex(i);
        }
    };

    const prevHandler = () => {
        if (index === 0) {
            setIndex(3);
        } else {
            let i = index;
            i--;
            setIndex(i);
        }
    };

    const randomHandler = () => {
        const randomIdx = indices[Math.floor(Math.random() * indices.length)];
        return setIndex(randomIdx);
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevHandler}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextHandler}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomHandler}>
                Get random!
            </button>
        </article>
    );
};
export default Review;
