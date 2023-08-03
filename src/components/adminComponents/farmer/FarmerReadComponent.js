import { useEffect, useState } from "react";

const initState = []

const FarmerReadComponent = () => {

    const [farmer, setFarmer] = useState()

    useEffect(() => {

        

    })

    return (  
        <div>
            <h1 className="text-3xl ml-12">Member Read</h1>
            <div className="container m-auto">
            <div>
                <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-2 h-[700px]'>
                    <div className="m-2 p-2"></div>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default FarmerReadComponent;