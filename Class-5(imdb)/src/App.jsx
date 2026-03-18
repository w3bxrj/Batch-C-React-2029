import { useEffect, useState } from "react";
import "./App.css";
import MoodSelector from "./components/MoodSelector";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieContext } from "./MovieContext";

function App() {
  const [watchList, setWatchList] = useState([]);

  function addToWatchList(movieObj) {
    watchList.push(movieObj);
    setWatchList(watchList);
    localStorage.setItem("movies", JSON.stringify(watchList));
  }

  useEffect(() => {
    let moviesFromLS = localStorage.getItem("movies");
    if (!moviesFromLS) {
      return;
    }
    let movies = JSON.parse(moviesFromLS);
    setWatchList(movies);
  }, []);

  return (
    <>
    <MovieContext value={{addToWatchList}}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Movies watchList={watchList}  />
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchList={watchList} />}
          />
          <Route path="/mood" element={<MoodSelector />} />
        </Routes>
      </BrowserRouter>
      </MovieContext>
    </>
  );
}

export default App;
