import Input from "../input/Input"

const InputFormElement = (props:{

    label:string,
    placeholer:string,
    className:string,
    value?:string,
    disabled?:boolean,
    onChange?:(event: React.ChangeEvent<HTMLInputElement>)=>void,
    name?:string,
}) => {

    return (

        <>
            <div className="form-elements">
                <p>{props.label}</p>
                <Input type="text" placeholder={props.placeholer} name={props.name} id="" 
                    className={props.className} value={props.value} disabled={props.disabled}
                    onChange={props.onChange}/>
            </div>
        </>
    )
}

export default InputFormElement