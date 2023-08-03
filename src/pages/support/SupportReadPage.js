import { useParams } from "react-router-dom";
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import SupportReadComponent from "../../components/adminComponents/support/SupportReadComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";

const SupportReadPage = () => {

    const {queryObj,moveList} = useQueryObj()
    const {bno} =useParams()
    return (  
        <div className="container m-auto">
        <div>
            Admin Board Read Pagge
            <AdminHeader></AdminHeader>
            <SupportReadComponent bno={bno} moveList={moveList}></SupportReadComponent>
          
            <Footer></Footer>
        </div>
    </div>
    );
}
 
export default SupportReadPage;