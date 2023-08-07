import { useEffect, useState } from "react";
import { deleteMember, getMemberOne, readMember } from "../../../api/adminAPI";
import { Link, useParams } from "react-router-dom";
import farmImage01 from "../../../public/farmerImage01.jpg"

const initState = {
    mno: 0,
    email: '',
    nickname: '',
    intro: '',
    delFlag: false
}

const FarmerReadComponent = () => {

    const [farmer, setFarmer] = useState(initState)
    const {mno} = useParams()

    useEffect(() => {

        readMember(mno).then(data => {

            console.log(data)
            setFarmer(data)

        })

    }, [mno])

    return (  

        <div>

        <div className="flex container h-[200px] mt-3">
        
        <div className=" w-[300px] flex justify-center items-center">
          <img src={farmImage01} alt="farmImage01" 
          className="rounded-[50%] object-cover w-[180px] h-[180px] justify-center flex">
  
          </img>
        </div>
  
        <div className="w-full flex">
          <div className="m-3 w-full ">
              <div className="mt-5 ">
                <span className="text-3xl font-semibold">{farmer.nickname} 농장</span>
                <button onClick={() => deleteMember(farmer.mno)}
                  className="border-gray-400 ml-28 p-1 border-2 rounded-md
                  hover:bg-black hover:text-white text-center text-sm">
                  강제 탈퇴
                </button>
              </div>
              <div className="mt-2">
                <span className="">@{farmer.email}</span>
                <span className="ml-5">구독자 1.2만명</span>
                <span className="ml-5">게시글 120개</span>
              </div>
              <div className="mt-3">
                <div>
                  안녕하세요 {farmer.nickname} 농장입니다.<br/>
                  저희 농장 페이지를 방문해 주셔서 감사합니다.<br/>
                  구입문의 {farmer.email}
                  
                </div>
              </div>
          </div>
        </div>
  
      </div>  


        {/* <div>
            <h1 className="text-3xl ml-12">Member Read</h1>
            <div className="container m-auto">
            <div>
                <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-2 h-[700px]'>
                    <div className="m-2 p-2">
                        <div>{farmer.mno}</div>
                        <div>{farmer.email}</div>
                        <div>{farmer.nickname}</div>
                        <div>{farmer.intro}</div>
                    </div>
                    <div className="m-2 p-2">
                        <button onClick={() => deleteMember(farmer.mno)}>강제탈퇴</button>
                    </div>
                </div>
            </div>
            </div>
        </div> */}

        </div>
    );
}
 
export default FarmerReadComponent;