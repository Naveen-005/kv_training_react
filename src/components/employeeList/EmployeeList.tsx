import './EmployeeList.css'
import EmployeeRow from '../employeeRow/EmployeeRow'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EmployeeList = () => {

    const [searchParams,setSearchParams]=useSearchParams()

    const employeeList=[{

        name:"Vishal M",
        id:1,
        joiningDate:new Date("2021-05-21"),
        role:"Developer",
        status:"Active",
        experience:3

    },{

        name:"Harishankar Manoj",
        id:2,
        joiningDate:new Date("2021-05-21"),
        role:"Marketing Officer",
        status:"Probation",
        experience:3

    },{

        name:"Harishankar Manoj",
        id:3,
        joiningDate:new Date("2021-05-21"),
        role:"Developer",
        status:"Inactive",
        experience:3

    },{

        name:"Harishankar Manoj",
        id:4,
        joiningDate:new Date("2021-05-21"),
        role:"Developer",
        status:"Inactive",
        experience:3

    }]

    console.log('executing')

    const [filteredEmployees, setFilteredEmployees] = useState(employeeList)

    useEffect(() => {

        const filterStatus=searchParams.get('status')
        if(filterStatus && filterStatus!='All'){

            setFilteredEmployees(employeeList.filter((employee)=>employee.status==filterStatus))
        }else if(filterStatus == 'All'){

            setFilteredEmployees(employeeList)
        }

        

    },[searchParams])

    const handleStatusChange = (event:any) => {

        setSearchParams({status:event?.target.value})
    }

    const navigate = useNavigate()

    const handleCreate = () => {

        navigate("/employees/create")
    }

    return(
        <> 

            <div className="heading-container">
                <h1>Employee List</h1>

                <div className='end-items'>

                    <span className='item'>
                        Filter By
                    </span>

                    <select name="status" id="cars" className='select-icon item' onChange={handleStatusChange}>
                        <option value="Status" disabled selected>Status</option>
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Probation">Probation</option>
                    </select>

                    <div className='btn-item item' onClick={handleCreate}>
                        <button type='button' className='round-btn'>+</button>
                        <span className='btn-text'>
                            Create Employee    
                        </span>
                    </div>
                    
                </div>
            </div>

            <div className='over-main'>

                <div className="table-row heading-row">

                    <div className="table-element">Employee Name</div>
                    <div className="table-element">Employee ID</div>
                    <div className="table-element">Joining Date</div>
                    <div className="table-element">Role</div>
                    <div className="table-element">Status</div>
                    <div className="table-element">Experience</div>
                    <div className="table-element">Actions</div>

                </div>

                {
                    filteredEmployees.map(employee => 

                        <EmployeeRow employee={employee} />

                )}

            </div>
    
        </>
    )
}

export default EmployeeList