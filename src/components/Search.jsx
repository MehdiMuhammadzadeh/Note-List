import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="type to search..."
        className="w-full border bg-gray-200 rounded-xl py-2 mt-3 outline-none pl-3 text-lg font-medium"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;


/// Problems that must be solved ==> Dark mode / Search Box / length of characters when we are in a new note /
// responsive 