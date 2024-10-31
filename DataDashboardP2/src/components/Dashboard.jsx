// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { fetchPopularMovies } from '../services/api';

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data.results.slice(0, 10));  // Use the top 10 movies for simplicity
    };
    getMovies();
  }, []);

  // Reformat data for Recharts
  const chartData = movies.map(movie => ({
    name: movie.title,
    popularity: movie.popularity,
  }));

  return (
    <div>
      <h2>Top Movies by Popularity</h2>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="popularity" stroke="#8884d8" />
      </LineChart>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
