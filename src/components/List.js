function List(props){
    return(
        <div className="showBegin">
            <img src={props.image} alt={props.title} />
            <div>
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}
export default List;