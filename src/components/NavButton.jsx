const NavButton = (props) => {
    const { icon, onClick, show } = props;
    if (show === false) {
        return null;
    }
    return (
        <button className="p-2 bg-purple-500 text-white rounded-md" onClick={onClick}>
            <i className={`fa-solid fa-chevron-${icon} m-2 text-lg`}></i>
        </button>
    );
};
export default NavButton;