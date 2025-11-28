import React, { useState, useEffect } from 'react';
import Widget1 from './Widget1.jsx';
import Widget2 from './Widget2.jsx';
import Widget3 from './Widget3.jsx';
import clsx from 'clsx';

const Search = ({purpleMode}) => {
    const [message, setMessage] = useState("default message");
    const [clicked, setClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        console.log("\nmessage: ", message, "\nclicked: ", clicked, "\nisHovered: ", isHovered, "\nsearchValue: ", searchValue);
    }, [message, clicked, isHovered, searchValue]);

    return <div className={clsx(
        "flex-1 flex flex-col justify-center items-center",
         purpleMode ? "bg-purple-100" : "bg-orange-100"
         )}
        >
        <Widget1 />
        <Widget2 />
        <Widget3 />
        <div className="text-6xl text-orange-500 mb-4">Foogle</div>

        <div className="bg-orange-200 border-2 border-orange-300 p-3 rounded-full w-80 flex justify-between items-center">
            <i className="fa-notdog fa-solid fa-magnifying-glass text-xl text-orange-400 ml-1"></i>

            <input className="flex-1 ml-3 bg-transparent outline-none text-orange-700" 
            type="text" 
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            />

        </div>
        <div className="mt-4 flex items-center">
            <button className={"m-2 rounded-md bg-violet-200 text-violet-700 px-4 py-2 mt-4 transition-shadow duration-300 " +
            (isHovered ? "shadow-lg shadow-violet-400/70" : "")} 
            
            // onClick={() => setClicked(!clicked)} // Toggle clicked state on click to true or false and the result is shown
            onClick={() => {
                window.open(`https://www.google.com/search?q=${searchValue}`, '_blank');
            }} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
                {clicked ? "Button Clicked" : "Foogle Search"}
            </button>
            <button className="m-2 rounded-md bg-violet-200 text-violet-700 px-4 py-2 mt-4">
                Image Search
            </button>
        </div>
    </div>
};
export default Search;


    // onClick={handleClick} 

    // This is a event handler for button click
    // const handleClick = () => {
    //     setClicked(true);
    //     setMessage("Button Clicked");
    //     setTimeout(() => {
    //         setClicked(false);
    //         setMessage("returning to default");
    //     }, 1000); // 1 second
    // };
