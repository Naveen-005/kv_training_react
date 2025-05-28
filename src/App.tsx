
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import CreateEmployeeForm from './components/createEmployeeForm/CreateEmployeeForm'
import NotFound from './components/pageNotFound/PageNotFound'
import Layout from './components/layout/Layout'
import EmployeeList from './components/employeeList/EmployeeList'
import EmployeeDetails from './components/employeeDetails/EmployeeDetails'


const router = createBrowserRouter([

  {
    path:"/",
    element:<Navigate to="/employees"/> 

  },{
    path:"/login",
    element: <Login />
  },{
    path:"/employees",
    element: <Layout heading='Create Employee' pageName='EmployeeList'/> ,
    children:[
      {index:true, element: <EmployeeList />},
      {path: "create", element: <CreateEmployeeForm />},
      {path:":id", element: <EmployeeDetails/>}
    ]
  },

  {
    path:"*",
    element:<NotFound />
  }
])

function App() {
  
  return (
    <>
    
      <RouterProvider router={router} />

    </>
  )
}

export default App
