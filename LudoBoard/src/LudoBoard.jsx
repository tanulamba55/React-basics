import React from "react";
import { useState } from "react";

function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  const updateMovesB = () => {
    console.log(moves);
    setMoves({ ...moves, blue: moves.blue + 1 });
  };

  const updateMovesY = () => {
    console.log(moves);
    setMoves({ ...moves, yellow: moves.yellow + 1 });
  };

  const updateMovesG = () => {
    console.log(moves);
    setMoves({ ...moves, green: moves.green + 1 });
  };

  const updateMovesR = () => {
    console.log(moves);
    setMoves({ ...moves, red: moves.red + 1 });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center text-white">
        <p className="my-2">Blue Moves = {moves.blue}</p>
        <button
          onClick={updateMovesB}
          className="px-5 py-3 my-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          +1
        </button>
        <p className="my-2">Yellow Moves = {moves.yellow}</p>
        <button
          onClick={updateMovesY}
          className="px-5 py-3 my-2 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
        >
          +1
        </button>
        <p className="my-2">Green Moves = {moves.green}</p>
        <button
          onClick={updateMovesG}
          className="px-5 py-3 my-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          +1
        </button>
        <p className="my-2">Red Moves = {moves.red}</p>
        <button
          onClick={updateMovesR}
          className="px-5 py-3 my-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default LudoBoard;
