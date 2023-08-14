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

        <div className="container mt-5 m-auto w-[1400px]">
            <div>
                <ul>
                    {listData.dtoList.map( reply => 
                    
                    <li 
                    className="hover:cursor-pointer" key={reply.rno}  onClick={() => changeCurrent(reply.rno)}
                    >

                    {/* <table className="w-[500px] m-2 bg-slate-300 border-4" style={ ord == 1 ? { margin-left : "3px" } : <></>}> */}
                    <table className="w-[500px] m-5 bg-slate-300" style={reply.ord === true ? { marginLeft: "50px" } : {}}>
                        {/* <tr className="border-b-2">
                            <td className="w-28 ">댓글번호 : </td>
                            <td className="border-2 bg-slate-50">{reply.rno}</td>
                        </tr> */}
                        <tr className="font-bold">
                            <td className="bg-slate-50">{reply.nickname}</td>
                        </tr>
                        <tr className="">
                            <td className="bg-slate-50">{reply.reply}</td>
                        </tr>
                    </table>

                    
                    
                    </li>)}
                </ul>
                
                <PagingComponent {...listData} movePage={movePage}></PagingComponent>
            </div>
        </div>

    );
}

export default ReplyList;