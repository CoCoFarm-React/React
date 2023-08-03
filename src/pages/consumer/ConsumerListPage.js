import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import ConsumerListComponent from "../../components/adminComponents/consumer/ConsumerListComponent";
import ConsumerSearchComponent from "../../components/adminComponents/consumer/ConsumerSearchComponent";
import Footer from "../../components/commonComponents/Footer";

const ConsumerListPage = () => {
    return (  
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <ConsumerSearchComponent></ConsumerSearchComponent>
                <ConsumerListComponent></ConsumerListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default ConsumerListPage;