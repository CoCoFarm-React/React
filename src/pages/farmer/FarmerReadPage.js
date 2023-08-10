
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
                <FarmerReadComponent  moveMemberListPage={moveMemberListPage} queryObj={queryObj} setSearch={setSearch} moveBoardReadPage={moveBoardReadPage}  ></FarmerReadComponent>
                {/* <FarmerDiaryComponent queryObj={queryObj} setSearch={setSearch}></FarmerDiaryComponent> */}
                {/* <FarmerAdminSupportComponent queryObj={queryObj} setSearch={setSearch}></FarmerAdminSupportComponent> */}
                {/* <FarmerCommunityComponent queryObj={queryObj} setSearch={setSearch}></FarmerCommunityComponent> */}
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerReadPage;