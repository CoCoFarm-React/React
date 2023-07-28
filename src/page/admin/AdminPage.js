import { useState } from "react";
import AdminHeader from "../../components/adminComponents/AdminHeader";
import CenterBoard from "../../components/adminComponents/CenterBoard";
import Footer from "../../components/commonComponents/Footer";
import { getFarmerList , getConsumerList } from "../../api/adminAPI";

const AdminPage = () => {

    const [list , setlist] = useState({});

    
    return ( 
     <div>
        <AdminHeader></AdminHeader>



        <LeftBoard getFarmerList={() => {}}></LeftBoard>
        <CenterBoard getConsumerList={() => {}}></CenterBoard>
        <RigthBoard getFarmerList={() => {}}></CenterBoard>




        <Footer></Footer>
     </div>
    );
}
 
export default AdminPage;