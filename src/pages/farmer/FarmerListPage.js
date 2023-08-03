import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerListComponent from "../../components/adminComponents/farmer/FarmerListComponent";
import SupportListComponent from "../../components/adminComponents/support/SupportListComponent";
import Footer from "../../components/commonComponents/Footer";

const FarmerListPage = () => {
    return (  
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <FarmerListComponent></FarmerListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerListPage;