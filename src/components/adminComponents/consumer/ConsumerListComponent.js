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
                <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-2 h-[700px]'>
                    <div className="m-2 p-2">
                    <table className="w-full mt-3">
                        <thead className="border-t-2 border-b">
                        <tr className="bg-gray-200">
                            <th className="w-4/12">이메일</th>
                            <th className="w-3/12">닉네임</th>
                        </tr>
                        </thead>
                        <tbody>
                            {consumer.map(({email, nickname}, idx) => 
                                idx > 14 ? <></> : (
                                   
                                    <tr key={idx} className="hover:bg-gray-200">
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