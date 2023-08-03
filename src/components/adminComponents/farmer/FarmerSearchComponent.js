import { Link } from "react-router-dom";

const FarmerSearchComponent = () => {
    return (  
        <div>
        <div className="float-left mt-3">
            <h1 className="text-3xl ml-12">Farmer List</h1>
        </div>
        <div className="mr-1 ml-auto pt-2 h-[50px] w-[280px]">
            <input type="text" className="m-2 p-1 bg-slate-200"></input>
            <button><Link>검색</Link></button>
        </div>
    </div>
    );
}
 
export default FarmerSearchComponent;