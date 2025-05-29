import { useState } from "react"
import PopUpCard from "../popUpCard/PopUpCard"
import { useNavigate } from "react-router-dom"

const EmployeeRow = (props:{
    className:string,
    elements:{
        className:string,
        value:string
    }[]

}) => {

    const navigate = useNavigate()

    const handleEdit = () => {

        navigate("2/edit")
    }

    const handleDelete = () => {
        setDisplayDeleteAlert(true)

    }

    const handleCancelDelete = () => {

        setDisplayDeleteAlert(false)
    }

    const handleConfirmDelete = () => {

        setDisplayDeleteAlert(false)
    }



    const [displayDeleteAlert,setDisplayDeleteAlert]=useState(false)



    return(
        <>
            <div className={props.className}>

                <div className="table-element">{props.elements[0].value}</div>
                <div className="table-element">{props.elements[1].value}</div>
                <div className="table-element">{props.elements[2].value}</div>
                <div className="table-element">{props.elements[3].value}</div>
                <div className="table-element"> 
                    <span className={`status ${props.elements[4].value.toLowerCase()}`}>{props.elements[4].value}</span> 
                </div>
                <div className="table-element">{props.elements[5].value}</div>
                <div className="table-element">
                    <img src="/assets/delete.png" alt="" className="list-icon" onClick={handleDelete}/>
                    <img src="/assets/pencil.png" alt="" className="list-icon" onClick={handleEdit}/>
                </div>

                
            </div>

            {
                displayDeleteAlert && <PopUpCard onConfirm={handleConfirmDelete} onCancel={handleCancelDelete}/>
            }
        </>
    )
}

export default EmployeeRow