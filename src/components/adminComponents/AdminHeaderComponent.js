import { Link } from "react-router-dom";
import FarmerSigInComponent from "./farmer/FarmerSignInComponent";
import farmIcon1 from "../../public/cocofarm6.png"

const AdminHeader = () => {
    return ( 
<div className="flex justify-between container h-[70px] text-black font-bold border-b-2 m-auto mt-2 ">

  <div className="flex justify-between">

    <div className="w-[200px]  justify-center flex">
      <Link to={"/"}>
        <img className="h-[69px] " alt="cocofarm" src={farmIcon1} />
      </Link>
    </div>

    <div className="w-[800px]  flex justify-center">

      <div className="m-5 mb-3 mt-auto text-xl hover:underline hover:scale-125">
        <Link to={"/farmer/home"}>Home</Link>
      </div>

      <div className="m-5 ml-20 mb-3 mt-auto text-xl hover:underline hover:scale-125">
        <Link to={"/farmer/diary"}>Diary</Link>
      </div>

      <div className="m-5 ml-20 mb-3 mt-auto text-xl hover:underline hover:scale-125">
        <Link to={"/farmer/qa"}>Q&A</Link>
      </div>

      <div className="m-5 ml-20 mb-3 mt-auto text-xl hover:underline hover:scale-125">
        <Link to={"/farmer/subscriberlist"}>Subscriber</Link>
      </div>

    </div>

  </div>

  <div>
    <FarmerSigInComponent/>
  </div>

</div>
    );
}
 
export default AdminHeader;