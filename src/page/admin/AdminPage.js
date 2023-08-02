import { useState } from "react";
import AdminHeader from "../../components/adminComponents/AdminHeader";

import CenterBoard from "../../components/adminComponents/CenterBoard";


import Footer from "../../components/commonComponents/Footer";
import LeftBoard from "../../components/adminComponents/LeftBoard";
import RightBoard from "../../components/adminComponents/RightBoard";
import TopCenterBoard from "../../components/adminComponents/TopCenterBoard";
import useQueryObj from "../../hooks/useQueryObj";




const AdminPage = () => {

    const [list , setlist] = useState({});

    const { queryObj } = useQueryObj();


    return ( 
     <div>
        <AdminHeader></AdminHeader>


        <TopCenterBoard></TopCenterBoard> 
        <div className='border-2 border-black border-solid rounded-2xl m-10 mt-2 mb-2 flex justify-between '>
            <LeftBoard>  </LeftBoard>
            <CenterBoard>  </CenterBoard>
            <RightBoard queryObj={queryObj}>  </RightBoard>
        </div>
        <Footer></Footer>
     </div>
    );
}
 
export default AdminPage;