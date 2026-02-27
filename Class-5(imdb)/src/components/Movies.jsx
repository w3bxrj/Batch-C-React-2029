import React, { useEffect } from "react";
import Banner from "./Banner";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  // Now get the movies data
  useEffect(() => {
    async function getMOvies() {
      let data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`
      );

      console.log(data)
    }

    getMOvies();
  }, []);

  return (
    <div>
      <Banner />
      <div
        className=" mt-10 flex gap-4 flex-wrap justify-evenly 
      "
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Movies;
