import { useState } from "react"
import PopUpCard from "../popUpCard/PopUpCard"
import { useNavigate } from "react-router-dom"
import { useDeleteEmployeeMutation } from "../../api-service/employees/employee.api"

const EmployeeRow = (props:{
    employee:{
        name:string,
        employeeId:number,
        dateOfJoining:string,
        role:string,
        status:string,
        experience:number,
        id:number
    }
}) => {

    const [deleteEmployee] = useDeleteEmployeeMutation()

    const navigate = useNavigate()

    const handleEdit = (event:any) => {
        event.stopPropagation()
        navigate(props.employee.id+"/edit")
    }

    const handleDelete = (event:any) => {
        event.stopPropagation()
        setDisplayDeleteAlert(true)

    }

    const handleCancelDelete = () => {

        setDisplayDeleteAlert(false)
    }

    const handleConfirmDelete = () => {

        deleteEmployee({id:props.employee.id})
        setDisplayDeleteAlert(false)
    }

    const [displayDeleteAlert,setDisplayDeleteAlert]=useState(false)



    return(
        <>
            <div className="table-row list-row" onClick={()=>{navigate(`/employees/${props.employee.id}`)}}>

                <div className="table-element">{props.employee.name}</div>
                <div className="table-element">{props.employee.employeeId}</div>
                <div className="table-element">
                    {new Date(props.employee.dateOfJoining).toLocaleDateString()}
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