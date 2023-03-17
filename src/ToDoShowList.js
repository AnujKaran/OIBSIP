function ToDoShowList(prop)
{
    return(
        <>
        <div className="todoShowList">
			
            <h6>{prop.index+1}. {prop.item}
           
            </h6>
			{/* <button>(-)</button> */}
            <span className="icon">
            <i className="bi bi-trash" onClick={()=>{
                prop.dl(prop.index);
                alert("delete");
            }}></i>
            </span>
		</div>
        </>
    )
}
export default ToDoShowList;