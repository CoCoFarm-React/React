import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import ConsumerListComponent from "../../components/adminComponents/consumer/ConsumerListComponent";
import Footer from "../../components/commonComponents/Footer";

const ConsumerListPage = () => {
    return (  
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <ConsumerListComponent></ConsumerListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default ConsumerListPage;