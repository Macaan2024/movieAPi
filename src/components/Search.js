import React, { useState } from 'react';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState(''); // Local state to hold input value

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    props.setSearch(searchValue); // Update the parent component's state with the search value
  };

  return (
    <>
      <div className="w-full px-8 py-2 sm:px-10 mt-10">
        <form className="max-w-2xl flex items-center max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              type="text"
              value={searchValue} // Bind the input field to the local state
              onChange={(e) => setSearchValue(e.target.value)} // Update the local state on input change
              id="simple-search"
              className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
