const CenterBoard = ({getList}) => {

    getList.then( data => {

        console.log(data)
        console.dir(data)

    })
  


    return ( 
    <div>
        <div className='border-2 border-black border-solid rounded-2xl m-10 mb-2 mt-0 flex h-[350px]'>
            
        </div>
    </div>
    );
}
 
export default CenterBoard;