const CenterBoard = ({getList}) => {

    getList.then( data => {

        console.log(data)
        console.dir(data)

    })
  


    return ( 
    <div>
        <div className='border-2 border-black border-solid rounded-2xl m-10 mt-2 mb-2 flex justify-between '>
            
            <div className='w-1/3 border-2 border-black border-solid rounded-2xl m-2 h-[400px]'>
                <h1>
                    게시글1
                </h1>
                <ul className='text-left pl-4 pt-4'>
                    <li className='text-left pt-2'>
                        재배자 가이드 - 
                    </li>
                    <li className='text-left pt-2'>
                        안녕하세요 재배게시판 입니다.
                    </li>
                </ul>
                {/* <KakaoMap></KakaoMap> */}
            </div>

        </div>
    </div>
    );
}
 
export default CenterBoard;