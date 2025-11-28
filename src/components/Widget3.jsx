import React, { useState } from 'react';    

const Widget3 = () => {
    const [toggleIcon, setToggleIcon] = useState(false);




    return <div className="bg-purple-100 border border-purple-300 p-4 rounded-lg m-4 flex flex-col items-center">
        {toggleIcon && <i className="fa-solid fa-poop text-fuchsia-500 text-3xl mb-3"></i>}
        <button className="px-4 py-2 bg-fuchsia-500 text-white rounded-full" 
        onClick={()=> setToggleIcon(!toggleIcon)}
        >Click Me!
        </button>
    </div>
};
export default Widget3;