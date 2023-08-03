import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerListComponent from "../../components/adminComponents/farmer/FarmerListComponent";
import FarmerSearchComponent from "../../components/adminComponents/farmer/FarmerSearchComponent";
import SupportListComponent from "../../components/adminComponents/support/SupportListComponent";
import Footer from "../../components/commonComponents/Footer";

const FarmerListPage = () => {
    return (  
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <FarmerSearchComponent></FarmerSearchComponent>
                <FarmerListComponent></FarmerListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerListPage;