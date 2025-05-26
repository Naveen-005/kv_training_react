interface Props{
    title: string
}

const Header = (props:Props) => {


    return(
        <div>
            <h1>
                {props.title}
            </h1>
        </div>
    )
}

export default Header;