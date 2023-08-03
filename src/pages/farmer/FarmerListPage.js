import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerListComponent from "../../components/adminComponents/farmer/FarmerListComponent";
import FarmerSearchComponent from "../../components/adminComponents/farmer/FarmerSearchComponent";
import SupportListComponent from "../../components/adminComponents/support/SupportListComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";

const FarmerListPage = () => {

    const {queryObj, setSearch, moveMemberReadPage} = useQueryObj()

    const movePage = (num) => {
        console.log("num-----------------------------", num)
        queryObj.page = num
        setSearch({...queryObj})
    }


    return (  
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <FarmerSearchComponent></FarmerSearchComponent>
                <FarmerListComponent queryObj={queryObj} movePage={movePage} moveMemberReadPage={moveMemberReadPage}></FarmerListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerListPage;