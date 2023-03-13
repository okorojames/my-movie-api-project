import { useRef } from "react";
import sampleImage from "../images/spidey.jpeg";
const Home = ({ movies }) => {
  const movieDesc = useRef();
  function showDesc(e) {
    e.preventDefault();
    movieDesc.current.classList.toggle("showDesc");
  }
  return (
    <section className="popular-section">
      <h2 className="popular-section-first-context">Popular Movies</h2>
      <div className="popular-movie-grid">
        {movies &&
          movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                src={`https://themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                className="movie-image"
                alt="movie-image"
              />
              <div className="movie-title">{movie.name}</div>
              <div className="movieDesc" ref={movieDesc}>
                {movie.overview}
              </div>
              <button onClick={showDesc}>Read More</button>
              <div className="movie-date">
                Released on: {movie.first_air_date}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Home;
