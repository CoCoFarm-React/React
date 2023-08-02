import { useEffect, useState } from "react";
import { getBoardList } from "../../api/adminAPI";
import { Link } from "react-router-dom";


const date = new Date();
const day = date.getDate();

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
  

const RightBoard = ({queryObj , moveboardReadPage}) => {

    const [ board , setBoard ] = useState(initState)
    
    useEffect(() => {

        queryObj.cateno = 1
     
        console.log("queryObj.cateno")
        console.log(queryObj.cateno)

        getBoardList(queryObj).then(data => {

            console.log(data)

            // data.dtoList = data.dtoList.filter(board => board.cateno === 1)
            // console.log(data.dtoList)
            
            setBoard({...data});
        })
    } , [queryObj])


    return ( 
    <div className="w-1/3 ">
        <div className='border-2 border-black border-solid rounded-2xl m-2  h-[400px] overflow-hidden'>
            <div className="flex">
                <div className="ml-2 mt-2">문의게시판</div>
                <Link to={"/farmer/list"}>
                    <button className="ml-auto mr-3 mt-1 text-gray-400">
                        more+      
                    </button>
                </Link>
            </div>  
                <div className="m-2 p-2">
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
                            {(board.dtoList).filter(board => board.cateno === 1).map(({bno, title,  rcnt, regDate} , idx) => 
                                idx > 6 ? <></> : (
                                   
                                    <tr key={bno} className="hover:bg-[#f6f6f6]" onClick={() => moveboardReadPage(bno)}>
                                        <td className="m-2 p-2 border-b-2 w-1/12 text-center">{bno}</td>    
                                        <td className="m-2 p-2 border-b-2 w-6/12">{title}</td> 
                                        <td className="m-2 p-2 border-b-2 w-1/12 text-center">{rcnt}</td>
                                        <td className="m-2 p-2 border-b-2 w-4/12 text-center">
                                            {regDate.slice(  -11 , -9) === (day.toString().size === 1 ? <></> : "0" + day) ? regDate.slice(11) : regDate.slice( 5 , 11 )  }
                                        </td>
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
 
export default RightBoard;