import { useEffect, useState } from "react"

export const useLocalStorage = (storageVar:string):[boolean,any] => {

    const [value,setValue]=useState(false)

    useEffect(() => {

        const tmpValue = localStorage.getItem(storageVar)

        if(tmpValue=="true"){
            setValue(true)
        }

    },[])

    useEffect(() => {

        localStorage.setItem(storageVar,value.toString())
        
    },[value])

    return [value,setValue]
    
}