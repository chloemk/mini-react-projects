import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Tour Lists</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(el => {
          // {...tours} can access to all the properties in object
          return <Tour key={el.id} {...el} removeTour={removeTour}></Tour>
        })}
      </div>
    </section>
  );
};

export default Tours;
