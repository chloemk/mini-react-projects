import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, removeTour}) => {
  //readmore 토글바
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {readMore ? info : `${info.substring(0, 230)}...`}
          {/* 버튼이 클릭되면 readmore를 false로 둔다 */}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
