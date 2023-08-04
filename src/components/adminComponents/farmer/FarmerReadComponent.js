import { useEffect, useState } from "react";
import { deleteMember, getMemberOne, readMember } from "../../../api/adminAPI";
import { Link, useParams } from "react-router-dom";

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
        </div>
    );
}
 
export default FarmerReadComponent;