import { useEffect, useState } from "react";
import Header from "./components/Header";
import Popular from "./components/Popular";
function App() {
  const [movies, setMovies] = useState();
  // getting the movie data
  async function getMovies() {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=296b046a3d7afb8c7d9de3d141e11353&language=en-US&page=1"
    );
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
  }
  // end getting the movie data
  //
  // useEffect which helps makes the movie data load and fetch before page contents even display
  useEffect(() => {
    getMovies();
  }, []);
  //
  return (
    <main className="App">
      <Header />
      {movies && <Popular movies={movies} />}
    </main>
  );
}

export default App;
