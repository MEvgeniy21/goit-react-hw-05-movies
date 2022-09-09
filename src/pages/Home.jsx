import TrendList from 'components/TrendList';
import { fetchTrend } from 'api/fetchTheMovieDB';
import { useState, useEffect } from 'react';

export default function Home() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    fetchTrend({ page: 1 })
      .then(data => {
        setTrend(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrendList trend={trend} />
    </div>
  );
}
