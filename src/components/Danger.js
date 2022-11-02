import Report from "./Report";

const Danger = (props) => {
    const handleToggle = props.handleToggle
    return(
        <div>
            <li onClick={props.handleToggle}>
                <div>
                    <img src={props.image} alt={props.title} />
                    <h3>{props.title}</h3>
                </div>
            </li>
        </div>
    )
}
export default Danger;