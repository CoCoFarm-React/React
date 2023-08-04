import { useEffect, useState } from "react";
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerReadComponent from "../../components/adminComponents/farmer/FarmerReadComponent";
import Footer from "../../components/commonComponents/Footer";
import { readMember } from "../../api/adminAPI";

const FarmerReadPage = () => {
    
    return (    
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <FarmerReadComponent></FarmerReadComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerReadPage;