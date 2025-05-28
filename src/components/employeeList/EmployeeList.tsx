import './EmployeeList.css'
import EmployeeRow from '../employeeRow/EmployeeRow'

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

    return(
        <> 
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