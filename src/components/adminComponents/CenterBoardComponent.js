import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConsumerList } from "../../api/adminAPI";

const initState = [{
    email: '',
    nickname: ''
}]

const CenterBoard = ({queryObj, moveboardReadPage}) => {

    const [consumer, setConsumer] = useState(initState)

    useEffect(() => {

        getConsumerList(queryObj).then(data => {

            console.log("get Consumer List.....................")
            console.log(data[0])

            setConsumer(data)

        })

    }, [queryObj])


    return ( 
        <div className="w-1/3 ">
        <div className='border-2 border-black border-solid rounded-2xl m-2  h-[400px] overflow-hidden'>
            <div className="flex justify-between">
                <div className="ml-6 mt-2" style={{fontSize:"20px"}}>소비자 게시판</div>
                <Link to={"/farmer/list"}>
                    <button className="mt-1 mr-6 text-gray-400">
                        more+      
                    </button>
                </Link>
            </div>  
                <div className="m-2 p-2">
                    <table className="w-full">
                        <thead className="border-t-2 border-b">
                        <tr className="bg-[#f6f6f6]">
                            <th className="w-4/12">이메일</th>
                            <th className="w-3/12">닉네임</th>
                        </tr>
                        </thead>
                        <tbody>
                            {consumer.map(({email, nickname}, idx) => 
                                idx > 6 ? <></> : (
                                   
                                    <tr key={idx} className="hover:bg-[#f6f6f6]">
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
 
export default CenterBoard;