import './Button.css'

const Button = (props:{
    type:string,
    value:string,
    className: string
}) => {

    return(
        <>
            <input type={props.type} value={props.value} className={props.className} />
        </>
        

    )
}

export default Button