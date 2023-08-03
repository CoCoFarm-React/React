import AdminHeaderComponent from "../../components/adminComponents/AdminHeaderComponent";
import SupportListComponent from "../../components/adminComponents/support/SupportListComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";

const FarmerListPage = () => {


    const { queryObj , moveboardReadPage } = useQueryObj();




    return (
        <div className="container m-auto">
            <div>
                <AdminHeaderComponent></AdminHeaderComponent>
                <SupportListComponent queryObj={queryObj} moveboardReadPage={moveboardReadPage}></SupportListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerListPage;