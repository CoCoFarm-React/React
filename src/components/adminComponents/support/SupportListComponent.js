import { Link, useParams } from "react-router-dom";
import { getFarmerList } from "../../../api/adminAPI";
import { useEffect, useState } from "react";

const initState = [{}]

const FarmerListComponent = ({queryObj , moveboardReadPage , }) => {

    // 처음 목록 뿌릴 때 에러 안 나도록 initState 넣어줌
    const [listData, setListData] = useState(initState)

    // 비동기 통신은 항상 useEffect
    useEffect(() => {
        
        //axios로 회원데이터 받아옴
        getFarmerList().then(data => {
            console.dir(data)
            setListData(data)
        })
        
    }, [])
    

    console.log("----------------------out --------------------")
    console.log(listData)


    return (  
        <div>
            <h1 className="text-3xl ml-12">FarmerList</h1>
            <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-0 h-[750px]'>
                <div className="mr-1 ml-auto pt-2 h-[50px] w-[280px]">
                    <input type="text" className="m-2 p-1 bg-slate-200"></input>
                    <button><Link>검색</Link></button>
                </div>
                <div className="bg-pink-300">
                    <ul>
                        {/* {listData.map(({email, nickname}) => <li key={email}>{email} - {nickname} </li>)} */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default FarmerListComponent;