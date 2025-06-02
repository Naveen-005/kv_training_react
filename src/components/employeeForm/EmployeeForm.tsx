import { useEffect } from "react"
import Input from "../input/Input"
import InputFormElement from "../inputFormElement/InputFormElement"
import SelectFormElement from "../selectFormElement/SelectFormElement"

const EmployeeForm = (props:{
    buttonType:string,
    buttonValue:string,
    disableIdEdit?:boolean,
    employee?:any,
    setEmployee?:any,
    onConfirm?:Function,
    
}) => {

    const departmentOptions= [
        {value:"Development"},
        {value:"Testing"},
        {value:"Quality Assurance"}
    ]

    const roleOptions = [
        {value:"Senior"},
        {value:"Lead"},
        {value:"Associate"}
    ]

    const statusOptions = [
        {value:"Probation"},
        {value:"Active"},
        {value:"Inactive"}
    ]
    let initialDetails={}

    useEffect(()=>{
        initialDetails=props.employee
    },[])
    

    const handleFormChange = (event:any) => {

        const {name,value}=event.target;
        props.setEmployee((prevState:any)=>({
            ...prevState, [name]:value
        }))
    }

    const handleAddressChange = (event:any) => {

        const {name,value}=event.target;
        props.setEmployee((prevState:any)=>({
            ...prevState,
            address: {
                ...prevState.address,
                [name]: value
            }
        }))
    }

    const resetForm = () => {

        props.setEmployee(initialDetails)
        
    }

    return (
        <>
            <form action="">
                <div className="form-flex-container">

                    <InputFormElement label="Employee Name" placeholer="Employee Name" 
                        className='form-input' value={props.employee?.name} onChange={handleFormChange}
                        name="name"/>

                    <InputFormElement label="Joining Date" placeholer="Joining Date" type="date"
                        className='form-input' value={props.employee?.dateOfJoining} onChange={handleFormChange}
                        name="dateOfJoining"/>

                    <InputFormElement label="Experience (Yrs)" placeholer="2" className='form-input' 
                        value={props.employee?.experience} onChange={handleFormChange} name="experience"/>

                    <InputFormElement label="Email ID" placeholer="Email ID" className='form-input' 
                        value={props.employee?.email} onChange={handleFormChange} name="email"/>

                    <InputFormElement label="Password" placeholer="Password" 
                        className='form-input' value={props.employee?.password} onChange={handleFormChange}
                        name="password" />

                    <InputFormElement label="Employee ID" placeholer="Employee Id" onChange={handleFormChange}
                        className='form-input' value={props.employee?.employeeId} name="employeeId" 
                        disabled={props.disableIdEdit}/>

                    

                    <SelectFormElement label="Department" disabled="Choose Department"
                        options={departmentOptions} className='form-input' value={props.employee?.department_id}
                        onChange={handleFormChange} name="department_id"/>

                    <SelectFormElement label="Role" disabled="Choose Role"
                        options={roleOptions} className='form-input' value={props.employee?.role}
                        onChange={handleFormChange} name="role"/>

                    <SelectFormElement label="Status" disabled="status"
                        options={statusOptions} className='form-input' value={props.employee?.status}
                        onChange={handleFormChange} name="status"/>

                    <div className="form-elements">
                        <p>Address</p>
                        <Input type="text" placeholder="Flat No./House No." className='form-input'
                            value={props.employee?.address?.houseNo} onChange={handleAddressChange}
                            name="houseNo"/>
                        <Input type="text" placeholder="Address Line 1" className='form-input' 
                            value={props.employee?.address?.line1} onChange={handleAddressChange} name="line1"/>
                        <Input type="text" placeholder="Address Line 2" className='form-input' 
                            value={props.employee?.address?.line2} onChange={handleAddressChange} name="line2"/>
                        <Input type="text" placeholder="Pincode" className='form-input' 
                            value={props.employee?.address?.pincode} onChange={handleAddressChange} name="pincode"/>
                    </div>

                </div>

                <div className="btn-group">
                    <Input className="primary button" type={props.buttonType} value={props.buttonValue} 
                        onClick={props.onConfirm}/>
                    <Input className="secondary button" type="reset" value="Cancel" onClick={resetForm}/>
                </div>

            </form>
        </>
    )
}

export default EmployeeForm