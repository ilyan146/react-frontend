const Footer = () => {
    return <div className="flex justify-between items-center bg-violet-100 text-violet-400 p-2 py-5">
        <div className="m-4 flex items-center">
            sample site
            <i className="px-3 fa-duotone fa-solid fa-bolt-lightning text-yellow-400"></i>
            BOLT
            </div>
        <div className="m-4">
            made with <i className="fa-solid fa-heart text-red-500"></i>
                <a 
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-violet-600 mx-2 underline font-bold"
                >
                  tailwind css
                </a>
            </div>
        <div className="m-4">by Ilyan</div>
        
    </div>
};

export default Footer;