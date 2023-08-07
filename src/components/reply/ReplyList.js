import { useEffect, useState } from "react";
import { getReplyList } from "../../api/adminAPI";
import PagingComponent from "../commonComponents/PagingComponent";

const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null
}

const ReplyList = ({ bno, page, last, refresh, movePage, changeCurrent ,changeCmd}) => {

    // 
    console.log("============================================data");
    

    // rendering시 에러방지
    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getReplyList(bno ,page ,last ).then( data => {
            console.log("============================================data");
            console.log(data);
            console.log("============================================data");

            setListData(data)
        })


    }, [bno,page,last,refresh])


    return (

        <div className="ml-4">
            <div className="ml-4 text-2xl">
                댓글 목록
            </div>
            <div>
                <ul>
                    {listData.dtoList.map( reply => 
                    
                    <li 
                    className="hover:cursor-pointer flex" key={reply.rno}
                    >

                    {/* <table className="w-[500px] m-2 bg-slate-300 border-4" style={ ord == 1 ? { margin-left : "3px" } : <></>}> */}
                    <table className="w-[500px] m-2 bg-slate-300 border-4" style={reply.ord === true ? { marginLeft: "50px" } : {}}>
                        <tr className="border-b-2">
                            <td className="w-28 ">댓글번호 : </td>
                            <td className="border-2 bg-slate-50">{reply.rno}</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="w-28">내용 : </td>
                            <td className="border-2 bg-slate-50">{reply.reply}</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="w-28">작성자 : </td>
                            <td className="border-2 bg-slate-50">{reply.nickname}</td>
                        </tr>
                    </table>
                    
                    { reply.delFlag === false ? 
                        <div className="border-2 border-black">
                        <div onClick={() => {changeCurrent(reply.rno); changeCmd(1);} }>답변하기</div>

                        <br></br>

                        <div onClick={() => {
                            changeCurrent(reply.rno);  changeCmd(2);
                        }}>수정하기</div>
                        </div> : <></>
                    }

                    
                    
                    </li>)}
                </ul>
                <PagingComponent {...listData} movePage={movePage}></PagingComponent>
            </div>
        </div>

    );
}

export default ReplyList;