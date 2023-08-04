import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFarmerList } from "../../api/adminAPI";

const initState = [{
    email: '',
    nickname: ''
}]

const LeftBoard = ({queryObj, moveMemberReadPage}) => {

    const [farmer , setFarmer] = useState(initState);

    useEffect(()=>{

        getFarmerList(queryObj).then(data => {

            console.log("get Farmer List....................")
            console.log([...data])

            setFarmer(data)
            
        })
        
    },[queryObj])


    return ( 
        <div className="w-1/3 ">
        <div className='border-2 border-black border-solid rounded-2xl m-2  h-[400px] overflow-hidden'>
            <div className="flex justify-between">
                <div className="ml-6 mt-2" style={{fontSize:"20px"}}>재배자 게시판</div>
                <Link to={"/farmer/list"}>
                    <button className="mt-1 mr-6 text-gray-400">
                        more+      
                    </button>
                </Link>
            </div>  
                <div className="m-2 p-2">
                    <table className="w-full">
                        <thead className="border-t-2 border-b">
                        <tr className="bg-gray-200">
                            <th className="w-4/12">이메일</th>
                            <th className="w-3/12">닉네임</th>
                        </tr>
                        </thead>
                        <tbody>
                            {farmer.map(({email, nickname}, idx) => 
                                idx > 6 ? <></> : (
                                   
                                    <tr key={mno} className="hover:bg-gray-200" onClick={() => moveMemberReadPage(mno)}>
                                        <td className="m-2 p-2 border-b-2 w-4/12 text-center">{email}</td>    
                                        <td className="m-2 p-2 border-b-2 w-3/12 text-center">{nickname}</td> 
                                    </tr>

                                ) 
                            ) 
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
    );
}
 
export default LeftBoard;