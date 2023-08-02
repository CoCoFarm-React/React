import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerListComponent from "../../components/adminComponents/farmer/FarmerListComponent";
import Footer from "../../components/commonComponents/Footer";

const FarmerListPage = () => {
    return (  
        <div>
            <AdminHeader></AdminHeader>
            <FarmerListComponent></FarmerListComponent>
            <Footer></Footer>
        </div>
    );
}
 
export default FarmerListPage;