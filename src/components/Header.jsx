import Mode from './Mode.jsx';
import clsx from 'clsx';

const Header = ({purpleMode, togglePurpleMode}) => {
    return <div className={clsx(
        "flex justify-between px-4 py-2",
        purpleMode 
        ? 'bg-purple-300 text-purple-700'
        : "bg-orange-200 text-orange-600"
        )}
        >
        <div className="flex items-center">
            <div className="mx-4">About</div>
            <div className="mx-4">Store</div>
        </div>
        <div className="flex items-center">
            <div>
                <Mode onClick={togglePurpleMode} />
            </div>
            <div className="mx-4">Settings</div>
            <div className="mx-4">
                <i className={clsx("fa-duotone fa-solid fa-circle-user text-3xl",
                 purpleMode ? "text-violet-400" : "text-orange-600")}></i>
            </div>
        </div>
    </div>
};

export default Header;