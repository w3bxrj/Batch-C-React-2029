import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-md">
      
      {/* Left Side: Logo and Title */}
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="bg-blue-600 p-2 rounded-lg">
          {/* Movie Reel SVG Icon */}
         
        </div>
        <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          CineMatch
        </h1>
      </div>

      {/* Right Side: Navigation Links */}
      <div className="flex space-x-10 items-center">
        <a href="/" className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 uppercase tracking-wide">
          Movies
        </a>
        <a href="/watchlist" className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 uppercase tracking-wide">
          Watchlist
        </a>
        <a href="/mood" className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 uppercase tracking-wide">
          Mood Selector
        </a>
      </div>

    </nav>
  )
}

export default Navbar