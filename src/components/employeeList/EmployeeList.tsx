import './EmployeeList.css'
import EmployeeRow from '../employeeRow/EmployeeRow'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {

    const elements= [{
            className:'table-element',
            value:'Vishal M'
        },{
            className:'table-element',
            value:'KV123'
        },{
            className:'table-element',
            value:'12.02.2021'
        },{
            className:'table-element',
            value:'Full Stack',
        },{
            className:'table-element',
            value:'Active',
        },{
            className:'table-element',
            value:'3 Years'
        }]

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

                    <select name="status" id="cars" className='select-icon item'>
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

                <EmployeeRow className='table-row list-row' elements={elements}/>

                <EmployeeRow className='table-row list-row' elements={elements}/>

                <EmployeeRow className='table-row list-row' elements={elements}/>

                <EmployeeRow className='table-row list-row' elements={elements}/>

            </div>
        </>
    )
}

export default EmployeeList