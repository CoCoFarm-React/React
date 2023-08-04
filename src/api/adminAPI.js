import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const getFarmerList = async (queryObj) =>{

    const parameter = createSearchParams(queryObj).toString()

    console.log("parameter.........................")
    console.log(parameter)
    console.log(queryObj)

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/farmer?${parameter}`)
    return res.data
    
}

export const getConsumerList = async (queryObj) =>{

    const parameter = createSearchParams(queryObj).toString()

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/consumer?${parameter}`)
    return res.data
    
}

// 문의 게시판 관련 api
export const getBoardList = async (queryObj) =>{

    console.log("------------------------------------------", queryObj)

    const parameter = createSearchParams(queryObj).toString()

    console.log("--------------------111111111111111111111111----------------------" + parameter)

    const res = await axios.get(`http://192.168.0.48:8080/api/board/list?${parameter}`)
    
    return res.data

}

export const getBoardOne = async (bno) =>{

    const res = await axios.get(`http://192.168.0.48:8080/api/board/${bno}`)
    return res.data

}

export const addBoard = async () =>{

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/consumer`)
    return res.data

}

export const getMemberOne = async (mno) => {

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/memberOne`)
    return res.data
    
}

export const getReplyList = async (bno , page = 1 , last = false) =>{

    console.log("=====================================================================");
    console.log(bno);
    console.log(page);
    console.log(last);
    console.log("=====================================================================");

    const res = await axios.get(`http://192.168.0.48:8080/api/replies/${bno}/list?page=${page}&last=${last}`)
    return res.data

}

export const readMember = async (mno) =>{

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/read/${mno}`)
    return res.data

}

export const deleteMember = async (mno) =>{

    const res = await axios.delete(`http://192.168.0.48:8080/api/admin/${mno}`)
    return res.data

}
