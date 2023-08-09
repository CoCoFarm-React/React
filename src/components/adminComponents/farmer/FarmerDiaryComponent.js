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
    cateno: 2,
  }


const FarmerDiaryComponent = ({queryObj,setSearch}) => {
    
    const [writeBoard, setWriteBoard] =useState(initState)
    const {mno} =useParams()
    console.log(mno)
    console.log(queryObj)
    queryObj.cateno = 2
    useEffect(()=>{

      getBoardListbyWriter(mno,queryObj).then(data=>{
        console.log(data)
        setWriteBoard(data)
      })

    },[queryObj])


      return ( 
    
        <div className="flex container h-[1200px] mt-3 ">
    
          <ul className="flex flex-wrap container items-center justify-center mt-2 ">
            
            {/* <div className="items-center justify-center flex">
              <input className="rounded-sm border-2 p-2"/>          
              <button type="submit" className="border-2 p-2 w-20 hover:bg-black hover:text-white">검색</button>
            </div> */}
          
            <div className=" w-full ">
    
              {writeBoard.dtoList.map((farmer, index) => (
                <li className="flex h-auto bg-white m-2 p-2 rounded-md border-2 border-gray-400" key={index}>
                  <div className="w-36">
                    {/* <div className="text-red-500 font-extrabold">No. {index + 1}</div> */}
                    <div className="flex  items-center hover:cursor-pointer">
                      
                    </div>
                    <div className="text-center text-black font-extrabold mt-3">
                      <div className="font-bold hover:cursor-pointer">{farmer.name}</div>
                      <div className="text-red-600">{farmer.farmName}</div>
                      {/* <div>리뷰 {farmer.reviews} 평점 {farmer.rating}</div> */}
                    </div>
    
                  </div>
    
                  <div className="w-full bg-sb-03 ml-5 whitespace-pre-line" >
                    <div className="ml-3">
                    {/* {this.props.data.content.split("\n").map((line) => { //this.props.data.content: 내용
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })} */}
    
              {/* {this.props.data.content} */}
                     
                      
                    </div>
                  </div>
                </li>
    
              ))}
            </div>
    
          </ul>
        </div>
       );
    }
 
export default FarmerDiaryComponent;