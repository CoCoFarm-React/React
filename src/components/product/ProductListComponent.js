import { useEffect, useState } from "react"
import PagingComponent from "../commonComponents/PagingComponent"
import { getProductList } from "../../api/adminAPI"

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
    cateno: 1
  }

const ProductListComponent = ({queryObj , moveProductReadPage, movePage, moveSearch}) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProductList(queryObj).then(data => {

            console.log("get Consumer List....................")
            console.log(data)

            setProduct(data)

        })

    }, [{...queryObj}])


    return (  
        <div className="justify-center items-center container mt-3 ">
        
        <table className="w-[1200px] items-center justify-center container m-auto">
  
          <thead>
            <tr className="border-b-2 border-gray-300 text-center h-12">
                <th className="w-1/12">No</th>
                <th className="w-4/12">Name</th>
                <th className="w-1/12">Price</th>    
                <th className="w-3/12">Email</th>    
                <th className="w-2/12">Time</th>    
            </tr>
          </thead>
  
          <tbody>
            {product.dtoList.map( ({pno, pname, price, modDate, email}) => 
              <tr className="border-b-2 border-gray-300 text-center h-12"
                  key={pno}
                  onClick={() => moveProductReadPage(pno)}
              >
                <td>{pno}</td>
                <td className="hover:underline hover:cursor-pointer">{pname}</td>
                <td>{price}</td>
                <td>{email}</td>
                <td>{modDate}</td>
              </tr>
            
            )}
          </tbody>
        </table>
  
        <PagingComponent movePage={movePage} {...product}></PagingComponent>
  
      </div>
    );
}
 
export default ProductListComponent;