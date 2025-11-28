const MyButton = (props) => {
    console.log("MyButton props:", props);
    return <div>
        <button className="border-2 border-green-600 text-green-400 px-8 py-2 m-4 rounded-md">
            first button
        </button>
        <button className="rounded-lg bg-sky-400 text-white px-10 py-4">
            second button
        </button>
    </div>
};

export default MyButton;