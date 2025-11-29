const CatCard = (props) => {
    const { cat } = props;
    if (!cat) return null;
    return <div className="flex-1 flex justify-between items-center rounded-lg">
                <div className="flex-1 flex flex-col items-center">
                    <div className="text-neutral-500">
                            <img
                                className="rounded-t-lg w-60 h-64 object-cover" 
                                src={cat.imageUrl} alt={cat.name}  
                            />
                    </div>
                    <div className="p-4 text-sm text-neutral-600 bg-white rounded-b-md w-60">
                        <div className="flex text-neutral-500">
                            <h1 className="mr-2 font-bold w-24">name</h1>
                            <div>{cat.name}</div>
                        </div>
                        <div className="flex text-neutral-500">
                            <h1 className="mr-2 font-bold w-24">breed</h1>
                            <div>{cat.breed}</div>
                        </div>
                        <div className="flex text-neutral-500">
                            <h1 className="mr-2 font-bold w-24">age</h1>
                            <div>{cat.age}</div>
                        </div>
                        <div className="flex text-neutral-500">
                            <h1 className="mr-2 font-bold w-24">location</h1>
                            <div>{cat.location}</div>
                        </div>
                    </div>
                </div>
    </div>

};

export default CatCard;
