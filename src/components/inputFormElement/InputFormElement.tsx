import Input from "../input/Input"

const InputFormElement = (props:{

    label:string,
    placeholer:string,
    className:string,
}) => {

    return (

        <>
            <div className="form-elements">
                <p>{props.label}</p>
                <Input type="text" placeholder={props.placeholer} name="" id="" className={props.className}/>
            </div>
        </>
    )
}

export default InputFormElement