import { useEffect, useState } from "react";
import BoardSearchComponent from "../board/BoardSearchComponent";
import PagingComponent from "../../commonComponents/PagingComponent";
import { getListByMno } from "../../../api/adminAPI";

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

const FarmerProductListComponent = ({queryObj, setSearch, moveBoardReadPage, moveSearch, movePage, mno}) => {

    const [products, setProducts] = useState()

    useEffect(() => {

        getListByMno(queryObj, mno).then(data => {

            console.log("get List By Mno........................")
            console.log(data)

        })

    }, [queryObj])


    return (     
        <div className="container h-[1200px] mt-3">
      {/* <ul className="flex flex-wrap container items-center justify-center mt-2 "> */} */}
 
        {/* <BoardSearchComponent queryObj={queryObj} moveSearch={moveSearch}></BoardSearchComponent>

        {products !== null && products.dtoList.length > 0 ? 
            
        <div className="justify-center items-center container mt-3">
  
        <table className="items-center justify-center container">

          <thead>
            <tr className="border-b-2 border-gray-300 bg-gray-200 text-center h-12">
              <td className="w-1/12">No</td>
              <td className="w-6/12">Title</td>
              <td className="w-2/12">RegDate</td>
              <td className="w-1/12">ReplyCnt</td>          
            </tr>
          </thead>

          <tbody>
            {products.dtoList.map( ({bno,title,regDate,rcnt}) => 
              <tr className="border-b-2 border-gray-300 text-center h-12 hover:bg-gray-200"
                  key={bno}
                  // onClick={() => moveboardReadPage(bno)}
              >
                <td>{bno}</td>
                <td className="text-left hover:underline hover:cursor-pointer" onClick={() => moveBoardReadPage(bno, mno)}>{title}</td>
                <td>{regDate}</td>
                <td>{rcnt}</td>
              </tr>
            
            )}
          </tbody>
        </table>
        </div>

        : 

        <div className="justify-center items-center container mt-3">
  
        <table className="items-center justify-center container">

          <thead>
            <tr className="border-b-2 border-gray-300 bg-gray-200 text-center h-12">
              <td className="w-1/12">No</td>
              <td className="w-6/12">Title</td>
              <td className="w-2/12">RegDate</td>
              <td className="w-1/12">ReplyCnt</td>          
            </tr>
          </thead>
          </table>
          <div className="text-center mt-5 text-gray-500">등록된 게시물이 없습니다.</div>
          </div>}

        <PagingComponent movePage={movePage} {...products}></PagingComponent> */}

        </div>
    );
}
 
export default FarmerProductListComponent;