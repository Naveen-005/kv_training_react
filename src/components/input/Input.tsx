import type { Ref, ChangeEvent } from "react"

const Input = (props:{
    type?:string,
    placeholder?:string,
    name?:string,
    id?:string,
    className?:string
    value?:string
    onChange?: (event: ChangeEvent<HTMLInputElement>)=>void
    ref?:Ref<HTMLInputElement>
    endAdornment?: React.ReactNode
    label?:string
    checked?:boolean

}) => {

    return(
        <div className="parentInput">
            <input type={props.type} 
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                className={props.className}
                value={props.value}
                onChange={props.onChange}
                ref={props.ref}
                checked={props.checked}

            />
            {
                props.endAdornment ? props.endAdornment : null
            }
        </div>
    )
}

export default Input