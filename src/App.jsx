import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [movies,setMovies] = useState([]);

  const fetchMovie = () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODkzYWVhNGE1MDk4NTZlZmFmMTA2OWVlZTBhZWY3YiIsIm5iZiI6MTczMTYwNzkzMy41ODA3ODg5LCJzdWIiOiI2NzM2Mzg2YWQ0ZmZiYTFlOGIyYWZkYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Zw_6hqaZ2hHJKDwtb8ney4gS1Hj4_nP9OsxXViEb9D4'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(res => setMovies(res.results))
  .catch(err => console.error(err));
  };
  useEffect(() => {
    fetchMovie();
  },[]);
  
  if (movies.length == 0){
    return <div>Loading...</div>
  }
  return (
    <>
      {movies.map((movie) => (
      <MovieCard key={movie} movies={movie} />
      ))
        
      }
    </>
  );
}

function MovieCard ({movies}) {
  const {backdrop_path,title,overview} =movies;
  return (
  <>
   <div className='card'>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
      <h1>{title}</h1>
      <p>{overview}</p>
   </div>
  </>
)}

export default App
