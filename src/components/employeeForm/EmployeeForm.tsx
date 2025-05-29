import Input from "../input/Input"
import InputFormElement from "../inputFormElement/InputFormElement"
import SelectFormElement from "../selectFormElement/SelectFormElement"
import { useEffect, useState } from "react"

const EmployeeForm = (props:{
    buttonType:string,
    buttonValue:string,
    disableIdEdit?:boolean,
    employee?:any
    
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
        {value:"Available"},
        {value:"On project"},
        {value:"On leave"}
    ]

    const[employee,setEmployee]=useState({
        name:"",
        email:"",
        age:"",
        password:"",
        employeeId:"",
        dateOfJoining:"",
        experience:"",
        department_id:"",
        role:"",
        status:"",
        address:{
            houseNo:"",
            line1:"",
            line2:"",
            pincode:""
        }
    })

    useEffect(()=>{

        if(props.employee){
            setEmployee(props.employee)
        }
    },[])

    const handleFormChange = (event:any) => {

        const {name,value}=event.target;
        setEmployee((prevState)=>({
            ...prevState, [name]:value
        }))
    }

    const handleAddressChange = (event:any) => {

        const {name,value}=event.target;
        setEmployee((prevState)=>({
            ...prevState,
            address: {
                ...prevState.address,
                [name]: value
            }
        }))
    }

    return (
        <>
            <form action="">
                <div className="form-flex-container">

                    <InputFormElement label="Employee Name" placeholer="Employee Name" 
                        className='form-input' value={employee.name} onChange={handleFormChange}
                        name="name"/>

                    <InputFormElement label="Joining Date" placeholer="Joining Date" 
                        className='form-input' value={employee.dateOfJoining} onChange={handleFormChange}
                        name="dateOfJoining"/>

                    <InputFormElement label="Experience (Yrs)" placeholer="2" className='form-input' 
                        value={employee.experience} onChange={handleFormChange} name="experience"/>

                    <InputFormElement label="Email ID" placeholer="Email ID" className='form-input' 
                        value={employee.email} onChange={handleFormChange} name="email"/>

                    <InputFormElement label="Password" placeholer="Password" 
                        className='form-input' value={employee.password} onChange={handleFormChange}
                        name="password" />

                    <InputFormElement label="Employee ID" placeholer="Employee Id" onChange={handleFormChange}
                        className='form-input' value={employee.employeeId} name="employeeId" disabled={props.disableIdEdit}/>

                    

                    <SelectFormElement label="Department" disabled="Choose Department"
                        options={departmentOptions} className='form-input' value={employee.department_id}
                        onChange={handleFormChange} name="department_id"/>

                    <SelectFormElement label="Role" disabled="Choose Role"
                        options={roleOptions} className='form-input' value={employee.role}
                        onChange={handleFormChange} name="role"/>

                    <SelectFormElement label="Status" disabled="status"
                        options={statusOptions} className='form-input' value={employee.status}
                        onChange={handleFormChange} name="status"/>

                    <div className="form-elements">
                        <p>Address</p>
                        <Input type="text" placeholder="Flat No./House No." className='form-input'
                            value={employee.address.houseNo} onChange={handleAddressChange}
                            name="houseNo"/>
                        <Input type="text" placeholder="Address Line 1" className='form-input' 
                            value={employee.address.line1} onChange={handleAddressChange} name="line1"/>
                        <Input type="text" placeholder="Address Line 2" className='form-input' 
                            value={employee.address.line2} onChange={handleAddressChange} name="line2"/>
                        <Input type="text" placeholder="Pincode" className='form-input' 
                            value={employee.address.pincode} onChange={handleAddressChange} name="pincode"/>
                    </div>

                </div>

                <div className="btn-group">
                    <Input className="primary button" type={props.buttonType} value={props.buttonValue} />
                    <Input className="secondary button" type="reset" value="Cancel" />
                </div>

            </form>
        </>
    )
}

export default EmployeeForm