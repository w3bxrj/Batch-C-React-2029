import React from "react";

import { genreids } from "../genres";

function WatchList({ watchList }) {
  return (
    <div className="rounded-lg border border-gray-200 m-8 overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse bg-white text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Poster</th>
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th className="px-6 py-4 font-medium text-gray-900">Ratings</th>
            <th className="px-6 py-4 font-medium text-gray-900">Popularity</th>
            <th className="px-6 py-4 font-medium text-gray-900">Genre</th>
            <th className="px-6 py-4 font-medium text-gray-900">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movieObj) => (
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <img
                  className="h-20 w-14 object-cover rounded-md shadow-sm"
                  src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                  alt="poster"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">{movieObj.title}</td>
              <td className="px-6 py-4">{movieObj.vote_average}</td>
              <td className="px-6 py-4">{movieObj.popularity}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">

                   {genreids[movieObj.genre_ids[0]]}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="font-medium text-red-600 hover:text-red-800 transition-colors cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* Repeat <tr> for more items */}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList;
