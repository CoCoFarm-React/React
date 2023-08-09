import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardListbyWriter } from "../../../api/adminAPI";



const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null,
    cateno: 1,
  }


const FarmerCommunityComponent = ({queryObj,setSearch}) => {

    const [writeBoard, setWriteBoard] =useState(initState)
    const {mno} =useParams()
    console.log(mno)
    console.log(queryObj)
    queryObj.cateno = 4
    useEffect(()=>{

      getBoardListbyWriter(mno,queryObj).then(data=>{
        console.log(data)
        setWriteBoard(data)
      })

    },[queryObj])

    return (  <></>);
}
 
export default FarmerCommunityComponent;