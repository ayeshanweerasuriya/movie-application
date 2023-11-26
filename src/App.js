import { useEffect } from "react";

// 9e358063

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9e358063";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("John Wick");
  }, []);
  return (
    <>
      <h1>App</h1>
    </>
  );
};

export default App;
