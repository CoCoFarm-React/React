
const FarmerDiaryComponent = () => {
    
    const farmers = [
        {
          name: "당근 재배일지",
          farmName: "농장1",
          image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "당근 재배일지",
          farmName: "농장1",
          image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "당근 재배일지",
          farmName: "농장1",
          image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "당근 재배일지",
          farmName: "농장1",
          image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "당근 재배일지",
          farmName: "농장1",
          image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        
    
      ];
      return ( 
    
        <div className="flex container h-[1200px] mt-3 ">
    
          <ul className="flex flex-wrap container items-center justify-center mt-2 ">
            
            {/* <div className="items-center justify-center flex">
              <input className="rounded-sm border-2 p-2"/>          
              <button type="submit" className="border-2 p-2 w-20 hover:bg-black hover:text-white">검색</button>
            </div> */}
          
            <div className=" w-full ">
    
              {farmers.map((farmer, index) => (
                <li className="flex h-auto bg-white m-2 p-2 rounded-md border-2 border-gray-400" key={index}>
                  <div className="w-36">
                    {/* <div className="text-red-500 font-extrabold">No. {index + 1}</div> */}
                    <div className="flex  items-center hover:cursor-pointer">
                      <img src={farmer.image} alt={farmer.name} className="w-36 h-32"></img>
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
                      오늘은 가지를 수확했습니다!<br/>
                      가지가 싱싱해요!<br/>
                      구입문의 : 010-3333-5555
                      
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