import './CreateEmployeeForm.css'
import Input from '../input/Input'
const CreateEmployeeForm = () => {

    return(

        <>
            <form action="">
                    <div className="form-flex-container">

                        <div className="form-elements">
                            <p>Employee Name</p>
                            <Input type="text" placeholder="Employee Name" name="" id="" className=''/>
                        </div>

                        <div className="form-elements">
                            <p>Joining Date</p>
                            <Input type="text" placeholder="Joining Date" name='' id='' className='' />
                        </div>

                        <div className="form-elements">
                            <p>Experience (Yrs)</p>
                            <Input type="number" placeholder="2" name='' id=''/>
                        </div>

                        <div className="form-elements">
                            <p>Department</p>
                            <select name="Department" id="department">
                                <option value="" disabled selected>Choose Department</option>
                                <option value="Development">Development</option>
                                <option value="Testing">Testing</option>
                                <option value="Quality Assurance">Quality Assurance</option>

                            </select>
                        </div>

                        <div className="form-elements">
                            <p>Role</p>
                            <select name="Role" id="role" >
                                <option value="" disabled selected>Choose Role</option>
                                <option value="Senior">Senior</option>
                                <option value="Lead">Lead</option>
                                <option value="Associate">Associate</option>

                            </select>
                        </div>

                        <div className="form-elements">
                            <p>Status</p>
                            <select name="Status" id="status" >
                                <option value="" disabled selected>Status</option>
                                <option value="Available">Available</option>
                                <option value="On Porject">On Project</option>
                                <option value="On Leave">On Leave</option>

                            </select>
                        </div>

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