import { useState } from "react";

import CenterBoardComponent from "../../components/adminComponents/CenterBoardComponent";


import LeftBoardComponent from "../../components/adminComponents/LeftBoardComponent";
import RightBoardComponent from "../../components/adminComponents/RightBoardComponent";
import TopCenterBoardComponent from "../../components/adminComponents/TopCenterBoardComponent";
import useQueryObj from "../../hooks/useQueryObj";
import BasicLayout from "../../layouts/BasicLayout";




const AdminPage = () => {

    const [list , setlist] = useState({});

    const { queryObj , moveboardReadPage, moveMemberReadPage } = useQueryObj();
    


    return ( 
     <div className="container m-auto">
        <BasicLayout>
            <TopCenterBoardComponent></TopCenterBoardComponent> 
            <div className='border-2 border-black border-solid rounded-2xl m-10 mt-2 mb-2 flex justify-between '>
                <LeftBoardComponent queryObj={queryObj}  moveMemberReadPage={moveMemberReadPage}>  </LeftBoardComponent>
                <CenterBoardComponent queryObj={queryObj} moveMemberReadPage={moveMemberReadPage}>  </CenterBoardComponent>
                <RightBoardComponent queryObj={queryObj} moveboardReadPage={moveboardReadPage}> </RightBoardComponent>
            </div>
        </BasicLayout>
     </div>
    );
}
 
export default AdminPage;