import { useEffect, useState } from "react";
import { getBoardOne } from "../../../api/adminAPI";


const initState ={
    bno:0,
    title:'',
    content:'',
    email:'',
    nickname:'',
    catename:'',
    cateno:0,
    regDate:'',
    modDate:'',
    delFlag: false
}





const SupportReadComponent = ({bno, moveList}) => {

    const [board, setBoard] = useState(initState)

    useEffect(()=>{
        getBoardOne(bno).then(data =>{
            setBoard(data)
        })

    },[bno])

    console.log(board)

    return (  

        <div className="items-center justify-center container flex mt-5">

      <table className="w-[1400px] items-center justify-center">
        <thead className="">
          <tr className="bg-gray-200">
              <td className="border-2 font-medium w-32 text-center p-2">No</td>
              <td className="border-2 p-2">{board.bno}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center p-3">제목</td>
              <td className="border-2 p-3">{board.title}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center p-3">내용</td>
              <td className="border-2 p-3">{board.content}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center p-3">닉네임</td>
              <td className="border-2 p-3">{board.nickname}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center p-3">게시일</td>
              <td className="border-2 p-3">{board.regDate}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium h-80 text-center p-3">Fname</td>
              <td className="border-2 p-3">{board.fname}</td>             
          </tr>

          {/* <tr>
            <td className="border-2 font-medium h-80 text-center">Fname</td>
            <td className="border-2">
              <ul>
                {board.fname.map( fileList => <li>{fileList}</li>
                )}
              </ul>
            </td>
          </tr> */}

            
        </thead>
    
      </table>

    </div>
    );
}
 
export default SupportReadComponent;