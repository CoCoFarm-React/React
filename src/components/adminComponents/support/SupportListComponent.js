import { Link, useParams } from "react-router-dom";
import { getBoardList, getFarmerList } from "../../../api/adminAPI";
import { useEffect, useState } from "react";
import PagingComponent from "../../commonComponents/PagingComponent";
const date = new Date();
const day = date.getDate();
const month = date.getMonth()
const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null,
    cateno: 1
  }

const SupportListComponent = ({queryObj, movePage, moveboardReadPage}) => {

    // 처음 목록 뿌릴 때 에러 안 나도록 initState 넣어줌
    const [listData, setListData] = useState(initState)

    // 비동기 통신은 항상 useEffect
    useEffect(() => {
        
        queryObj.cateno = 1
        //axios로 데이터 가져오기
        getBoardList(queryObj).then(data => {
           
            setListData(data)
        }
        )
        
    }, [queryObj])
    

    console.log("----------------------out --------------------")
    console.log(listData)


    return (  
        <div>
            <h1 className="text-3xl ml-12">관리자 문의 리스트</h1>
            <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-0 h-[750px]'>
            
                <div className="bg-pink-300">
                <table className="w-full">
                        <thead className="border-t-2 border-b">
                        <tr className="bg-[#f6f6f6]">
                            <th className="w-1/12">번호</th>
                            <th className="w-6/12">제목</th>
                            <th className="w-1/12">댓글</th>
                            <th className="w-4/12">게시일</th>
                        </tr>
                        </thead>
                        <tbody>
                            {(listData.dtoList).map(({bno, title,  rcnt, regDate}) => 
                               
                                    
                                    <tr key={bno} className="hover:bg-[#f6f6f6]" onClick={() => moveboardReadPage(bno)}>
                                        <td className="m-2 p-2 border-b-2 w-1/12 text-center">{bno}</td>    
                                        <td className="m-2 p-2 border-b-2 w-6/12">{title}</td> 
                                        <td className="m-2 p-2 border-b-2 w-1/12 text-center">{rcnt}</td>
                                        <td className="m-2 p-2 border-b-2 w-4/12 text-center">
                                            {regDate.slice(5,7)===(0+(month+1).toString())&&regDate.slice(8,10)===0+day.toString()? regDate.slice(11) :regDate.slice(0,10)}
                                        </td>
                                    </tr>
                            ) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <PagingComponent movePage={movePage} {...listData}></PagingComponent>
        </div>
    );
}
 
export default SupportListComponent;