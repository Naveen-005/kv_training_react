import { useEffect, useState } from "react"

export const useMousePosition = () => {

    const [mouseX,setMouseX]=useState(0)
    const [mouseY,setMouseY]=useState(0)

    const updateMousePosition = (event:any) => {
        setMouseX(event.pageX)
        setMouseY(event.pageY)
    }

    useEffect(() => {

        window.addEventListener("mousemove",updateMousePosition)

        return () => {
            window.removeEventListener("mousemove",updateMousePosition)
        }
        
    },[])

    return {
        mouseX:mouseX,
        mouseY:mouseY
    }
}

