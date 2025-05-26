const SelectFormElement = (props:{
    label: string,
    disabled:string,
    options:{
        value:string
    }[]
}) => {

    return (

        <>
            <div className="form-elements">
                <p>{props.label}</p>
                <select name={props.label} id={props.label}>
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