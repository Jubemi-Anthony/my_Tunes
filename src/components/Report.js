const Report = (props) => {
    console.log(props.toggle)
    const display = props.toggle
    return(
        <div style={display === true ? {display: 'block'} : {display: 'none'}} className="report">
            <p className="dangerText"><span className="red">Emergency</span> Help Needed?</p>
            <p className="reporting">Report a <span>Something</span> case.</p>
            <button className="sendEMe">Send alert to get help.</button>
            <p className="brother">Tap the button to get <span>Help!</span></p>
            <button className="cancelEme">Cancel</button>
        </div>
    )
} 
export default Report;

