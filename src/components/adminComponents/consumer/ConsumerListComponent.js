import { useEffect, useState } from "react"
import { getConsumerList } from "../../../api/adminAPI"
import AdminHeader from "../AdminHeaderComponent"
import { Link } from "react-router-dom"

const initState = [{
    email: '',
    nickname: ''
}]

const ConsumerListComponent = () => {

    const [consumer, setConsumer] = useState(initState)

    useEffect(() => {

        getConsumerList().then(data => {

            console.log("get Consumer List....................")
            console.log(data)

            setConsumer(data)

        })

    }, [])


    return (  
            <div>
                <h1 className="text-3xl ml-12">Consumer List</h1>
                <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-0 h-[750px]'>
                    <div className="mr-1 ml-auto pt-2 h-[50px] w-[280px]">
                        <input type="text" className="m-2 p-1 bg-slate-200"></input>
                        <button><Link>검색</Link></button>
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
                                idx > 14 ? <></> : (
                                   
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
 
export default ConsumerListComponent;