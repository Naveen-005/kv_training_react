import './Button.css'

const Button = (props:{
    type?:"submit" | "reset" | "button",
    value?:string,
    className?: string,
    onClick?:any,
    disabled?:boolean,
    text?:string,
    name?:string
}) => {

    return(
        <>
            <button type={props.type} value={props.value} className={props.className} onClick={props.onClick} 
            
                disabled={props.disabled} name={props.name}>{props.name}</button>
        </>
        

    )
}

export default Button