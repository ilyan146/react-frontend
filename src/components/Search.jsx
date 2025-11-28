const Search = () => {
    return <div className="flex-1 flex flex-col justify-center items-center bg-orange-100">
        <div className="text-6xl text-orange-500 mb-4">Foogle</div>

        <div className="bg-orange-200 border-2 border-orange-300 p-3 rounded-full w-80 flex justify-between items-center">
            <i className="fa-notdog fa-solid fa-magnifying-glass text-xl text-orange-400 ml-1"></i>
            <input className="flex-1 ml-3 bg-transparent outline-none text-orange-700" 
            type="text" 
            placeholder="search"
            />
        </div>
        <div className="mt-4">
            <button className="m-2 rounded-md bg-violet-200 text-violet-700 px-4 py-2 mt-4">
                Foogle Search
            </button>
            <button className="m-2 rounded-md bg-violet-200 text-violet-700 px-4 py-2 mt-4">
                Image Search
            </button>
        </div>
    </div>
};
export default Search;