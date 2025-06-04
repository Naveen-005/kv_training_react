import { useSearchParams } from "react-router-dom";
import Button from "../button/Button";

const SrchPrms = () => {

    const [searchParams,setSearchParams]=useSearchParams()

    const newSearchParams = new URLSearchParams(searchParams)

    const handleGet = () => {

        const status=searchParams.get("status")
    }

    const handleSet = () => {

        setSearchParams({status:"Hello",role:"HR"})
    }

    const handleNewSet = () => {

        newSearchParams.set("name","naveen")
        setSearchParams(newSearchParams)
    }

    return(
        <>
            <Button type='button' value='Set' onClick={handleSet}/>
            <Button type='button' value='Get' onClick={handleGet}/>
            <Button type='button' value='Set New' onClick={handleNewSet}/>
        </>
    )
}

export default SrchPrms