import React, { useState, useEffect } from 'react';
import Widget1 from './Widget1.jsx';
import Widget2 from './Widget2.jsx';
import Widget3 from './Widget3.jsx';
import clsx from 'clsx';
import CatCard from './CatCard.jsx';
import { CATS } from '../data/cat_catalog.js';
import NavButton from "./NavButton";

const Search = ({purpleMode}) => {
    const [message, setMessage] = useState("default message");
    const [clicked, setClicked] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    // For the carousel
    const [catIndex, setCatIndex] = useState(2);

    useEffect(() => {
        console.log("\nmessage: ", message, "\nclicked: ", clicked, "\nisHovered1: ", isHovered1, "\nisHovered2: ", isHovered2, "\nsearchValue: ", searchValue);
    }, [message, clicked, isHovered1, isHovered2, searchValue]);

    return (
            <div className={clsx(
                "flex-1 flex justify-center items-center",
                purpleMode ? "bg-purple-100" : "bg-orange-100"
                )}>
                
                <div className="flex-1 flex flex-col items-center ">
                    <Widget1 />
                    <Widget2 />
                    <Widget3 />
                    <div className="text-6xl text-orange-500 mb-4">Foogle</div>
                    <div className="bg-orange-200 p-3 rounded-full w-80 flex justify-between items-center">
                        <i className="fa-notdog fa-solid fa-magnifying-glass text-xl text-orange-400 ml-1"></i>

                        <input className="flex-1 ml-3 bg-transparent outline-none text-orange-700" 
                        type="text" 
                        placeholder="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                    <div className="mt-4 flex items-center">
                        <button className={clsx(
                            "m-2 rounded-md bg-violet-200 text-violet-700 px-4 py-2 mt-4 transition-shadow duration-300",
                        (isHovered1 ? "shadow-lg shadow-violet-400/70" : ""),
                        "transition active:scale-95 active:bg-violet-300"
                        )} 
                        onClick={() => {
                            window.open(`https://www.google.com/search?q=${searchValue}`, '_blank');
                        }} 
                        onMouseEnter={() => setIsHovered1(true)} 
                        onMouseLeave={() => setIsHovered1(false)}
                        >
                            {clicked ? "Button Clicked" : "Foogle Search"}
                        </button>

                        <button className={clsx(
                            "m-2 rounded-md bg-violet-200 text-violet-700 px-4 py-2 mt-4 transition active:scale-95 active:bg-violet-300",
                            isHovered2 ? "shadow-lg shadow-violet-400/70" : "" 
                        )}
                        onClick={()=>{
                            window.open(`https://www.google.com/search?tbm=isch&q=${searchValue}`, '_blank');
                        }}
                        onMouseEnter={() => setIsHovered2(true)} 
                        onMouseLeave={() => setIsHovered2(false)}
                        >
                            Image Search
                        </button>
                    </div>

                </div>
                <div className="flex justify-center items-center flex-1 max-w-md mx-20" >
                        <NavButton 
                            icon="left"
                            show={catIndex > 0}
                            onClick={() => {setCatIndex(catIndex - 1)}} 
                        />

                        <CatCard cat={CATS[catIndex]} />

                        <NavButton 
                            icon="right"
                            show={catIndex < CATS.length - 1}
                            onClick={() => {setCatIndex(catIndex + 1)}} 
                        />
                </div>
            </div>
    );
};
export default Search;
