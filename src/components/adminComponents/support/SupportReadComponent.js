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

    return (  
        <div>
            <table className="border-2">
                <tr>
                    <th>asd</th>
                    <td>asd</td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td></td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td></td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td></td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td></td>
                </tr>
                <div>{board.bno}</div>
                <div>{board.title}</div>
                <div>{board.content}</div>
                <div>{board.nickname}</div>
                <div>{board.regDate}</div>
            </table>

            <button onClick={moveList}>List</button>

        </div>
        
    );
}
 
export default SupportReadComponent;