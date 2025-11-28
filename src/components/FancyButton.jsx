const FancyButton = (props) => {
    console.log("FancyButton props:", props);
    const { children, large, rounded } = props;

    const largeStyle = large ? "text-3xl" : "text-base";
    const roundedStyle = rounded ? "rounded-full" : "rounded-md";

    return <button className={`bg-blue-200 border-2 border-blue-700 text-blue-700  px-10 py-2 m-4 ${roundedStyle} ${largeStyle}`}>
        {children}
    </button>
}
export default FancyButton;