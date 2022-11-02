import Danger from "./Danger";
import { useState } from "react";

function Dangerlist(props){
    const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(true)
    console.log(toggle)
  }
    return(
        <ul className="dangerList">
            {props.items.map(dangerp => <Danger handleToggle={handleToggle}  key={dangerp.id} id={dangerp.id} image={dangerp.image} title={dangerp.title}/>)}
        </ul>
    )
}
export default Dangerlist;

