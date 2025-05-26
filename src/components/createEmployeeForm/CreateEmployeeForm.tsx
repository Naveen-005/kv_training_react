import './CreateEmployeeForm.css'
import Input from '../input/Input'
import InputFormElement from '../inputFormElement/InputFormElement'
import SelectFormElement from '../selectFormElement/SelectFormElement'

const CreateEmployeeForm = () => {

    const inputs=[{
        label:"Employee Name",
        placeholder: "Employee Name"
    },
    {
        label: "Joining Date",
        placeholder: "Joining Date"
    },
    {
        label: "Experience (Yrs)",
        placeholder:"2"
    }]

    const selectFields=[{
        label:"Department",
        disabled:"Choose Department",
        options:[
            {value:"Development"},
            {value:"Testing"},
            {value:"Quality Assurance"}
        ]
    },{
        label:"Role",
        disabled:"Choose Role",
        options:[
            {value:"Senior"},
            {value:"Lead"},
            {value:"Associate"}
        ]
    },{
        label:"Status",
        disabled:"Status",
        options:[
            {value:"Available"},
            {value:"On project"},
            {value:"On leave"}
        ]
    }]

    return(

        <>
            <form action="">
                    <div className="form-flex-container">

                        {
                            inputs.map(element => {
                                return <InputFormElement label={element.label} 
                                    placeholer={element.placeholder}/>
                            })
                        }{   
                            selectFields.map(element => {
                                return <SelectFormElement label={element.label} 
                                    disabled={element.disabled} 
                                    options={element.options}/>
                            })
                        }

                        <div className="form-elements">
                            <p>Address</p>
                            <Input type="text" placeholder="Flat No./House No." />
                            <Input type="text" placeholder="Address Line 1" />
                            <Input type="text" placeholder="Address Line 2" />
                        </div>

                    </div>

                    <div>
                        <Input className="primary button" type="submit" value="Create" />
                        <Input className="secondary button" type="reset" value="Cancel" />
                    </div>

            </form>

     
        </>
    )
}

export default CreateEmployeeForm