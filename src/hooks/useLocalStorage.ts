import { useEffect, useState } from "react"

export const useLocalStorage = (storageVar:string) => {

    const [value,setValue]=useState("")

    useEffect(() => {

        localStorage.getItem(storageVar)

    },[value])

    return useState(value)
    
}