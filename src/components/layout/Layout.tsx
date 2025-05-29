import './Layout.css'
import Sidebar from '../sidebar/Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
// import Button from '../button/Button'

const Layout = (props:{

    heading:string,
    pageName:string,
    }) => {

    const isLoggedIn = () => {
        const loggedIn = localStorage.getItem("isLoggedIn")
        return loggedIn === "true"
    }

    if(!isLoggedIn()){
        return <Navigate to="/login"/>
    }

    return(

        <>  

            <Sidebar pageName={props.pageName}/>

            <section>
                <div className="blank-white">
                </div>

                <Outlet />
            
            </section>
        </>
    )
}

export default Layout