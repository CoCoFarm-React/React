import { useEffect, useState } from "react";
import { getFarmerList } from "../../api/adminAPI";

const LeftBoard = ({}) => {

    const {farmer , setFarmer} = useState([]);

    

    useEffect(()=>{

        getFarmerList().then( data =>  {
            console.log(data)
            setFarmer(data)
        })

    },[])

    

    return ( 
    <div className="w-1/3">
        <div className='border-2 border-black border-solid rounded-2xl m-2 h-[400px]'>
            <h1>
                게시글1
            </h1>
            <table className='text-left pl-4 pt-4'>
                <tr>
                    <td className='text-left pt-2'>
                        재배자 가이드 - 
                    </td>
                    <td className='text-left pt-2'>
                        안녕하세요 재배게시판 입니다.
                    </td>
                    <td className='text-left pt-2'>
                        안녕하세요 재배게시판 입니다.
                    </td>
                </tr>
            </table>
            {/* <KakaoMap></KakaoMap> */}
        </div>

    </div>
    );
}
 
export default LeftBoard;