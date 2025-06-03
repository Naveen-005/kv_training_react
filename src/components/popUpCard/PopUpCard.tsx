import './PopUpCard.css'

const PopUpCard = (props:{
    onCancel:any,
    onConfirm:any
}) => {


    const handlePopUpConfirm = () => {
        props.onConfirm()
        
    }

    return(
        <>  
            <div className='popup-container'>
                <div className="popup">
                    <h3>Are you sure?</h3>
                    <p>
                        Do you really want to delete empolyee?
                    </p>
                    <div className="buttons">
                        <button type="button" className="primary-btn btn" onClick={handlePopUpConfirm}>Confirm</button>
                        <button type="button" className="secondary-btn btn" onClick={props.onCancel}>Cancel</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default PopUpCard