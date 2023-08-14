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
                    <table className="w-[1000px] m-5 p-2" style={reply.ord === true ? { marginLeft: "50px" } : {}}>
                        {/* <tr className="border-b-2">
                            <td className="w-28 ">댓글번호 : </td>
                            <td className="border-2 bg-slate-50">{reply.rno}</td>
                        </tr> */}
                        <tr className="font-bold text-gray-500">
                            <td className="bg-slate-50">{reply.nickname}</td>
                        </tr>
                        <tr>
                            <td className="bg-slate-50">{reply.reply}</td>
                            <button className="rounded-md hover:text-white text-center text-sm m-2 p-2 bg-green-200">MOD</button>
                        </tr>
                        <tr>
                            <button className="mb-5">↳ 대댓글 달기</button>
                            <div className=" border-b-gray-300 border-b"></div>
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