import { Link } from "react-router-dom";

const FarmerSigInComponent = () => {
    return (  
        <div>
        <Link to="/cocofarm/farmer/login">
            <button 
            className="border-gray-400 m-3 mt-7 p-1 border-2 rounded-md
            hover:bg-black hover:text-white text-center text-sm">
            FarmerIn
            </button>
        </Link>

        <Link to="/cocofarm/consumer/login">
            <button 
            className="border-gray-400 m-3 mt-7 p-1 border-2 rounded-md
            hover:bg-black hover:text-white text-center text-sm">
            LogOut
            </button>
        </Link>
    </div>
    );
}
 
export default FarmerSigInComponent;