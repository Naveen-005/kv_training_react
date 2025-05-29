const SelectFormElement = (props:{
    label: string,
    disabled:string,
    className?:string,
    value?:string,
    name?:string,
    onChange?:React.ChangeEventHandler<HTMLSelectElement>,
    options:{
        value:string
    }[]
}) => {

    return (

        <>
            <div className="form-elements">
                <p>{props.label}</p>
                <select name={props.name} id={props.label} className={props.className} 
                    value={props.value} onChange={props.onChange} >

                    <option value="" disabled selected>{props.disabled}</option>
                    {
                        props.options.map(element => {
                            return <option value={element.value}>{element.value}</option>
                        })
                    }
                    
                </select>
            </div>

        </>
    )
}

export default SelectFormElement