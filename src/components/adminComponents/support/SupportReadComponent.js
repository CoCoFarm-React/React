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
                    <td>{board.bno}</td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td>{board.title}</td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td>{board.content}</td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td>{board.nickname}</td>
                </tr>
                <tr>
                    <th>asd</th>
                    <td>{board.regDate}</td>
                </tr>
            </table>

            <button onClick={moveList}>List</button>

        </div>
        
    );
}
 
export default SupportReadComponent;