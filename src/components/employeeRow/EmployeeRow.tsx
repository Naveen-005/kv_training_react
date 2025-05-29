import { useState } from "react"
import PopUpCard from "../popUpCard/PopUpCard"
import { useNavigate } from "react-router-dom"

const EmployeeRow = (props:{
    employee:{
        name:string,
        id:number,
        joiningDate:Date,
        role:string,
        status:string,
        experience:number
    }
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
            <div className="table-row list-row">

                <div className="table-element">{props.employee.name}</div>
                <div className="table-element">{props.employee.id}</div>
                <div className="table-element">
                    {props.employee.joiningDate.toLocaleDateString().replace('/','.').replace('/','.')}
                </div>
                <div className="table-element">{props.employee.role}</div>
                <div className="table-element"> 
                    <span className={`status ${props.employee.status.toLowerCase()}`}>
                        {props.employee.status}
                    </span> 
                </div>
                <div className="table-element">{props.employee.experience} Years</div>
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