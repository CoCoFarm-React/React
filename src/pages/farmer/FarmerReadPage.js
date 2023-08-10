
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerReadComponent from "../../components/adminComponents/farmer/FarmerReadComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";

const FarmerReadPage = () => {
    
    const {queryObj, setSearch, moveMemberListPage, moveBoardReadPage} = useQueryObj();


    return (    
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <FarmerReadComponent moveMemberListPage={moveMemberListPage} queryObj={queryObj} setSearch={setSearch} moveBoardReadPage={moveBoardReadPage}  ></FarmerReadComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerReadPage;