
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerReadComponent from "../../components/adminComponents/farmer/FarmerReadComponent";
import Footer from "../../components/commonComponents/Footer";
import FarmerDiaryComponent from "../../components/adminComponents/farmer/FarmerDiaryComponent";
import useQueryObj from "../../hooks/useQueryObj";
import FarmerAdminSupportComponent from "../../components/adminComponents/farmer/FarmerAdminSupportComponent";
import FarmerCommunityComponent from "../../components/adminComponents/farmer/FarmerCommunityComponent";

const FarmerReadPage = () => {
    
    const {queryObj, setSearch, moveMemberListPage} = useQueryObj();


    return (    
        <div className="container m-auto">
            <div>
                <AdminHeader></AdminHeader>
                <FarmerReadComponent  moveMemberListPage={moveMemberListPage}  ></FarmerReadComponent>
                <FarmerDiaryComponent queryObj={queryObj} setSearch={setSearch}></FarmerDiaryComponent>
                <FarmerAdminSupportComponent queryObj={queryObj} setSearch={setSearch}></FarmerAdminSupportComponent>
                <FarmerCommunityComponent queryObj={queryObj} setSearch={setSearch}></FarmerCommunityComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerReadPage;