import './Button.css'

const Button = (props:{
    type?:string,
    value?:string,
    className: string,
    onClick?:VoidFunction
}) => {

    return(
        <>
            <input type={props.type} value={props.value} className={props.className} onClick={props.onClick} />
        </>
        

    )
}

export default Button