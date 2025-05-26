
const Input = (props:{
    type?:string,
    placeholder?:string,
    name?:string,
    id?:string,
    className?:string
    value?:string

}) => {

    return(
        <>
            <input type={props.type} 
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                className={props.className}
                value={props.value}    
            />
        </>
    )
}

export default Input