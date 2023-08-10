import { useEffect, useState } from "react";
import { deleteMember, getMemberOne, readMember } from "../../../api/adminAPI";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import farmImage01 from "../../../public/farmerImage01.jpg"
import FarmerDiaryComponent from "./FarmerDiaryComponent";
import FarmerAdminSupportComponent from "./FarmerAdminSupportComponent";
import FarmerCommunityComponent from "./FarmerCommunityComponent";

const initState = {
    mno: 0,
    email: '',
    nickname: '',
    intro: '',
    roleName: '',
    delFlag: false
}

const FarmerReadComponent = ({moveMemberListPage, queryObj, setSearch, moveBoardReadPage, moveSearch, movePage}) => {

    const [farmer, setFarmer] = useState(initState)
    const [show, setShow] = useState(1);
    const {mno} = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        readMember(mno).then(data => {

          console.log("----------------------- data")
          console.log(data)
          setFarmer(data)

        })

    }, [mno])

    // 강제탈퇴 확인 모달
    const handleClickDelete = () => {

      console.log("click modal")
      alert("회원이 삭제되었습니다.")
      deleteMember(farmer.mno)

      navigate('/')

    }

    const handleClickDiary = (cmd) => {

      setShow(cmd)
      console.log("show: " + show)

    }

    console.log("farmer.roleName" + farmer.roleName)


    return (  

          <div>

          <div className="flex container h-[200px] mt-3 mb-20">
          
          <div className=" w-[300px] flex justify-center items-center">
            <img src={farmImage01} alt="farmImage01" 
            className="rounded-[50%] object-cover w-[180px] h-[180px] justify-center flex">
    
            </img>
          </div>
    
          <div className="w-full flex">
            <div className="m-3 w-full ">
                <div className="mt-5 ">
                  <span className="text-3xl font-semibold">{farmer.nickname} 농장</span>
                  <button onClick={handleClickDelete}
                    className="border-gray-400 ml-28 p-1 border-2 rounded-md
                    hover:bg-gray-400 hover:text-white text-center text-sm">
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
                <div className="mt-5">
                <button className="border-gray-400 p-1 border-2 rounded-md
                    hover:bg-gray-400 hover:text-white text-center text-sm mr-2">
                  <Link to={"/farmer/list"}>
                    List
                  </Link>
                </button>

                {farmer.roleName == 'FARMER' ? 
                  <button     className={`border-gray-400 p-1 border-2 rounded-md text-center text-sm mr-2 ${
                    show === 1 ? 'bg-gray-300 text-white hover:bg-gray-400 hover:text-gray-300' : 'bg-white hover:bg-gray-400 hover:text-white'
                    }`}
                        onClick={() => handleClickDiary(1)}>
                  Diary</button> : <></>}


                <button     className={`border-gray-400 p-1 border-2 rounded-md text-center text-sm mr-2 ${
                show === 2 ? 'bg-gray-300 text-white hover:bg-gray-400 hover:text-gray-300' : 'bg-white hover:bg-gray-400 hover:text-white'
                }`}
                    onClick={() => handleClickDiary(2)}>
                  Community</button>
                <button     className={`border-gray-400 p-1 border-2 rounded-md text-center text-sm mr-2 ${
                show === 3 ? 'bg-gray-300 text-white hover:bg-gray-400 hover:text-gray-300' : 'bg-white hover:bg-gray-400 hover:text-white'
                }`}
                    onClick={() => handleClickDiary(3)}>
                  Q&A</button>
                </div>
                
              </div>
          </div>
        </div>  
        <div className="container m-auto w-[1500px]">
        {show == 1 ? <FarmerDiaryComponent queryObj={queryObj} setSearch={setSearch} moveBoardReadPage={moveBoardReadPage} moveSearch={moveSearch} movePage={movePage}></FarmerDiaryComponent> : <></>}
        {show == 2 ? <FarmerCommunityComponent queryObj={queryObj} setSearch={setSearch} moveBoardReadPage={moveBoardReadPage} moveSearch={moveSearch} movePage={movePage}></FarmerCommunityComponent> : <></>}
        {show == 3 ? <FarmerAdminSupportComponent queryObj={queryObj} setSearch={setSearch} moveBoardReadPage={moveBoardReadPage} moveSearch={moveSearch} movePage={movePage}></FarmerAdminSupportComponent> : <></>}
        </div>
        </div>
    );
}
 
export default FarmerReadComponent;