import { useEffect, useState } from "react"

const AdminSearchComponent = ({ queryObj, moveSearch}) => {
    
    const [searchObj, setSearchObj] = useState({ type: '', keyword: '' })

    // 무한 렌더링 방지 처리
    useEffect(() => {

        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''
        setSearchObj({ ...searchObj })
        
    }, [queryObj])

    
    return (
        <div className=" bg-blue-300 border-solid rounded-2xl m-10 mt-0 mb-0 flex justify-between h-[70px] px-96 pt-5">
            <select className="boarder-2 m-2 p-2 font-serif "
                value={searchObj.type}
                onChange={e => {
                    searchObj.type = e.target.value
                    setSearchObj({ ...searchObj })
                }}
            >
                <option value={''}>------</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목+내용</option>
                <option value={'tcw'}>제목+내용+작성자</option>
            </select>

            <input
                type="text"
                className="border-1 m-2 p-2"
                value={searchObj.keyword}
                onChange={e => {
                    searchObj.keyword = e.target.value
                    setSearchObj({ ...searchObj })
                }}
            ></input>

            <button
                className="border-2 m-2 p-2 text-white font-extrabold rounded-lg"
                onClick={e => moveSearch(searchObj.type, searchObj.keyword)}
            >SEARCH</button>

          </div>
    );
}

 
export default AdminSearchComponent;