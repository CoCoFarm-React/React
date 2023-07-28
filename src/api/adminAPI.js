import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const getFarmerList = async () =>{

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/farmer`)
    return res.data
    
}

export const getConsumerList = async () =>{

    const res = await axios.get(`http://192.168.0.48:8080/api/admin/farmer`)

    return res.data

}