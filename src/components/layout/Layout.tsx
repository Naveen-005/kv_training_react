import './Layout.css'
import Sidebar from '../sidebar/Sidebar'

const Layout = (props:{

    heading:string,
    pageName:string,
    children: React.ReactNode
}) => {

    return(

        <>  

            <Sidebar pageName={props.pageName}/>

            <section>
                <div className="blank-white">
                </div>
                
                <div className="heading-container">
                    <h1>{props.heading}</h1>
                </div>

                <div className='mainContent'>

                    {props.children}
                    
                </div>
            </section>
        </>
    )
}

export default Layout