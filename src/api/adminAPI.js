import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const getFarmerList = async (queryObj) =>{

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/farmer`)
    return res.data
    
}

export const getConsumerList = async (queryObj) =>{

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/consumer`)
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

// export const  = async () =>{

//     const res = await axios.get(`http://192.168.0.48:8080/api/admin/consumer`)
//     return res.data

// }

// export const  = async () =>{

//     const res = await axios.get(`http://192.168.0.48:8080/api/admin/consumer`)
//     return res.data

// }