const MovieCategory = (props) => {

    const handleCategoryChange = (e) => {
        console.log(e.target.value); // See the selected category
        props.setMovieCategory(e.target.value);
    };
    

    return (
        <>
            <div className="flex justify-start gap-5 items-center mb-3">
                <label>Movie Category </label>
                <select onChange={handleCategoryChange} value={props.movieCategory} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                    <option selected value="">Type</option>
                    <option value="movies">Movie</option>
                    <option value="episode">Episode</option>
                    <option value="series">Series</option>
                </select>
            </div>
        </>
    ) 
}

export default MovieCategory