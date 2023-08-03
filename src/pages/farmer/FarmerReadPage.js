import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerListComponent from "../../components/adminComponents/farmer/FarmerListComponent";
import FarmerReadComponent from "../../components/adminComponents/farmer/FarmerReadComponent";
import Footer from "../../components/commonComponents/Footer";

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