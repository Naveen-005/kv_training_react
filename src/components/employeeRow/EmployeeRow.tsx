const EmployeeRow = (props:{
    className:string,
    elements:{
        className:string,
        value:string
    }[]

}) => {

    const handleEdit = () => {

        alert("Edit")
    }

    const handleDelete = () => {
        alert("Delete")

    }

    return(
        <>
            <div className={props.className}>

                <div className={props.elements[0].className}>{props.elements[0].value}</div>
                <div className={props.elements[1].className}>{props.elements[1].value}</div>
                <div className={props.elements[2].className}>{props.elements[2].value}</div>
                <div className={props.elements[3].className}>{props.elements[3].value}</div>
                <div className={props.elements[4].className}> 
                    <span className={`status ${props.elements[4].value.toLowerCase()}`}>{props.elements[4].value}</span> 
                </div>
                <div className={props.elements[5].className}>{props.elements[5].value}</div>
                <div className="table-element">
                    <img src="/assets/delete.png" alt="" className="list-icon" onClick={handleDelete}/>
                    <img src="/assets/pencil.png" alt="" className="list-icon" onClick={handleEdit}/>
                </div>

                
            </div>
        </>
    )
}

export default EmployeeRow