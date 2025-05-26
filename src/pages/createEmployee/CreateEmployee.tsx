import './CreateEmployee.css'
import CreateEmployeeForm from '../../components/createEmployeeForm/CreateEmployeeForm'
import Layout from '../../components/layout/Layout'

const CreateEmployee = () => {

    return(
        <>  
            <Layout heading="Create Employee"
                pageName='Employee List'
                children={<CreateEmployeeForm />}
            />
         
        </>
    )
}


export default CreateEmployee