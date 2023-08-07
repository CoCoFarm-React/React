import { useState } from "react"
import { insertReply } from "../../api/adminAPI";

const initState = {
    bno: 0,
    mno: 0,
    gno: 0,
    reply: '',
    // replyFile: '',
    email: '',
    replyer: '',

}

const ReplyChild = ({ bno,rno,refreshLast,cancelRead }) => {
    // 상태 함수 설정
    const [reply, setReply] = useState({...initState})

    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }   

    const handleClickRegister = (e) =>{

        reply.bno = bno;
        reply.gno = rno;

        // 나중에 바꿔야함
        reply.mno = 11;
        // reply.replyText = '';
        reply.email = '나중에 쿠키값 들어감';
        
        insertReply(reply).then(data =>{
            
            console.log(data)

            alert(`${data.result}번 댓글 등록완료`)
            
            refreshLast()

            // inputTag내 데이터들을 삭제
            setReply({...initState})

        })



    }

    return ( 
    <div className="bg-black bg-opacity-50 h-[100vh] w-full absolute left-0 top-0 addModal">
        <div className="m-8 bg-red-200 border-2 absolute left-1/4 top-1/3">
            <div>답글 달기</div>
            <div className="flex">
                <div className="m-2 flex">
                    <div><textarea className="border-2 w-[700px] h-[100px]" name="reply" value={reply.reply} onChange={handleChange}></textarea></div>
                    {/* type="hidden" 예정 */}
                    {/* <div><input type="text" className="border-2 w-44" name="replyer" value={reply.replyer} onChange={handleChange}></input></div> */}
                </div>
                <div>
                    <button onClick={handleClickRegister} className="bg-yellow-200 p-5 pt-1 pb-1 rounded-xl mt-10" style={{fontSize:"20px"}}>
                        등록
                    </button>
                    <button onClick={cancelRead} className="bg-yellow-200 p-5 pt-1 pb-1 rounded-xl mt-10" style={{fontSize:"20px"}}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    </div>

    );
}
 
export default ReplyChild;