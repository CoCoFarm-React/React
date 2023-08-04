import { useState } from "react";
import { postReply } from "../../api/adminAPI";


const initState = {
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}

const ReplyInput = ({ bno,refreshLast }) => {

    const [reply, setReply] = useState({...initState})

    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }

    const handleClickRegister = (e) =>{

        reply.bno = bno;


    }


    return (

        <div className="m-8 bg-orange-50 border-3 ">
            {/* <div>Reply Input</div> */}
            <div className="flex">
                <div className="m-2 flex">
                    <div><textarea className="border-2 w-[700px] h-[100px]" name="replyText" value={reply.replyText} onChange={handleChange}></textarea></div>
                    {/* type="hidden" 예정 */}
                    {/* <div><input type="text" className="border-2 w-44" name="replyer" value={reply.replyer} onChange={handleChange}></input></div> */}
                </div>
                <div>
                    <button onClick={handleClickRegister} className="bg-yellow-200 p-5 pt-1 pb-1 rounded-xl mt-10" style={{fontSize:"20px"}}>
                        등록
                    </button>
                </div>
            </div>
        </div>

    );
}

export default ReplyInput;