import './Layout.css'
import Sidebar from '../sidebar/Sidebar'
import { Navigate, Outlet, useSearchParams } from 'react-router-dom'
// import Button from '../button/Button'

const Layout = (props:{

    heading:string,
    pageName:string,
    // children: React.ReactNode
    }) => {

    const isLoggedIn = () => {
        const loggedIn = localStorage.getItem("isLoggedIn")
        return loggedIn === "true"
    }

    if(!isLoggedIn()){
        return <Navigate to="/login"/>
    }

    // const [searchParams,setSearchParams]=useSearchParams()

    // const newSearchParams = new URLSearchParams(searchParams)

    // const handleGet = () => {

    //     const status=searchParams.get("status")
    //     console.log("status = "+status)
    // }

    // const handleSet = () => {

    //     // setSearchParams("status","Hello")
    //     setSearchParams({status:"Hello",role:"HR"})
    // }

    // const handleNewSet = () => {

    //     newSearchParams.set("name","naveen")
    //     setSearchParams(newSearchParams)
    // }

    return(

        <>  

            <Sidebar pageName={props.pageName}/>

            <section>
                <div className="blank-white">
                </div>
                
                <div className="heading-container">
                    <h1>{props.heading}</h1>

                    {/* <Button type='button' value='Set' onClick={handleSet}/>
                    <Button type='button' value='Get' onClick={handleGet}/>
                    <Button type='button' value='Set New' onClick={handleNewSet}/> */}
                </div>

                <div className='mainContent'>

                    <Outlet />
                    
                </div>
            </section>
        </>
    )
}

export default Layout