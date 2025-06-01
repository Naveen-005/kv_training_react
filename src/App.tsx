
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Suspense,lazy } from 'react'
import './App.css'
import Login from './pages/login/Login'
import CreateEmployeeForm from './components/createEmployeeForm/CreateEmployeeForm'
import NotFound from './components/pageNotFound/PageNotFound'
import Layout from './components/layout/Layout'
import EmployeeList from './components/employeeList/EmployeeList'
const EmployeeDetails = lazy(()=>import ('./components/employeeDetails/EmployeeDetails'))
import SrchPrms from './components/searchParams/SearchParams'
import EditEmployee from './components/editEmployee/EditEmployee'

const LazyLoadedEmployeeDetails = () => {
  return(
    <Suspense fallback={<p>Details are loading</p>}>
      <EmployeeDetails/>
    </Suspense>
  )
}

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
      {path:":id", element:<LazyLoadedEmployeeDetails/>},
      {path:":id/edit",element: <EditEmployee/>}
    ]
  },{
    path:"/test",
    element:<SrchPrms />

  },{
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
