import Input from "../input/Input"
import InputFormElement from "../inputFormElement/InputFormElement"
import SelectFormElement from "../selectFormElement/SelectFormElement"

const EmployeeForm = (props:{
    buttonType:string,
    buttonValue:string
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

    return(
        <>
            <form action="">
                    <div className="form-flex-container">

                        <InputFormElement label="Employee Name" placeholer="Employee Name" className='form-input'/>

                        <InputFormElement label="Joining Date" placeholer="Joining Date" className='form-input'/>

                        <InputFormElement label="Experience (Yrs)" placeholer="2" className='form-input'/>

                        <InputFormElement label="Email ID" placeholer="Email ID" className='form-input'/>

                        <InputFormElement label="Password" placeholer="Password" className='form-input'/>

                        <InputFormElement label="Pincode" placeholer="Pincode" className='form-input'/>

                        <SelectFormElement label="Department" disabled="Choose Department"
                            options={departmentOptions} className='form-input'/>

                        <SelectFormElement label="Role" disabled="Choose Role"
                            options={roleOptions} className='form-input'/>

                        <SelectFormElement label="Status" disabled="status"
                            options={statusOptions} className='form-input'/>

                        <div className="form-elements">
                            <p>Address</p>
                            <Input type="text" placeholder="Flat No./House No." className='form-input'/>
                            <Input type="text" placeholder="Address Line 1" className='form-input'/>
                            <Input type="text" placeholder="Address Line 2" className='form-input'/>
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