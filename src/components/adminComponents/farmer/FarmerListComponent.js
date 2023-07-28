import { Link } from "react-router-dom";

const FarmerListComponent = () => {
    return (  
        <div>
            <h1 className="text-3xl ml-12">FarmerList</h1>
            <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-0 flex h-[750px]'>
                <div className="mr-3 ml-auto pt-2 h-[50px]">
                    <input type="text" className="m-2 p-1 bg-slate-200"></input>
                    <button><Link>검색</Link></button>
                </div>
            </div>
        </div>
    );
}
 
export default FarmerListComponent;