import './Button.css'

const Button = (props:{
    type?:string,
    value?:string,
    className?: string,
    onClick?:any,
    disabled?:boolean
}) => {

    return(
        <>
            <input type={props.type} value={props.value} className={props.className} onClick={props.onClick} 
            
                disabled={props.disabled}/>
        </>
        

    )
}

export default Button