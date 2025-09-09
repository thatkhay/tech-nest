import React from "react";

const Input = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md w-full max-w-2xl">
      {/* Input Field */}
      <input
        type="text"
        placeholder="iPhone 15"
        className="flex-1 p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
      />

      {/* Search Button */}
      <button className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-md hover:opacity-90 transition">
        🔍 Search
      </button>

      {/* Advanced Button */}
      <button className="px-4 py-2 rounded-md border border-gray-300 text-blue-900 font-semibold bg-white shadow-sm hover:bg-gray-100 transition">
        🎯 Advanced
      </button>
    </div>
  );
};

export default Input;
