import { useMousePosition } from "../../hooks/useMousePosition"

const MousePosition = () => {

    const mousePos = useMousePosition()

    return(
        <>
            <p>Mouse X: {mousePos.mouseX}</p>
            <p>Mouse Y: {mousePos.mouseY}</p>
        </>
    )
}

export default MousePosition