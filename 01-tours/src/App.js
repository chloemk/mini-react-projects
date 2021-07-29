import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(el => el.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const fetchedData = await resp.json();
      console.log(fetchedData);
      setTours(fetchedData);
      setLoading(false);
    }
    catch (err) {
      setLoading(false);
      console.error(err);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>Please click refresh! 🔎</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return(
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>

    </>
  );
}

export default App
