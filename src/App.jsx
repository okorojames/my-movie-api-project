import { useEffect } from "react";
import Header from "./components/Header";
function App() {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=296b046a3d7afb8c7d9de3d141e11353"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <main className="App">
      <Header />
    </main>
  );
}

export default App;
