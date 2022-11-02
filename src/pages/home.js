import List from "../components/List";

function Home (){
    return(
        <div className="home">
            <h1>Welcome to the NAME APP</h1>
            <div className="gridMe">
                <List image="https://img.icons8.com/external-filled-outline-wichaiwi/2x/external-robbery-gamefi-filled-outline-wichaiwi.png" title="Theft & Armed Robbery Alerts" paragraph="Help report Armed Robbery Cases"/>
                <List image="https://img.icons8.com/external-stick-figures-gan-khoon-lay/2x/external-abuse-crimes-stick-figures-gan-khoon-lay.png" title="Help Stop Abuse" paragraph="Help people fight abuse"/>
                <List image="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-coercion-politics-flaticons-lineal-color-flat-icons-2.png" title="Report Kidnapping" paragraph="Report Kidnapping or Kidnappers"/>
                <List image="https://img.icons8.com/office/2x/fire-element.png" title="Report fire outbreaks" paragraph="Help report fire incidents before they cause serious damage"/>
                <List image="https://img.icons8.com/external-stick-figures-gan-khoon-lay/2x/external-choke-fighting-stick-figures-gan-khoon-lay.png" title="Report violent behaviour" paragraph="Keep the environment safe"/>
                <List image="https://img.icons8.com/office/2x/stick-fighting.png" title="Help Stop Domestic Violence" paragraph="Keep your friends and family safe by reporting Domestic Violence"/>
                <List image="https://img.icons8.com/external-stick-figures-gan-khoon-lay/2x/external-abuse-family-abuse-children-stick-figures-gan-khoon-lay-5.png" title="Report Child Abuse" paragraph="Keep CHildren safe by reporting Child Abuse"/>
                <List image="https://img.icons8.com/color/2x/sex-offender.png" title="Report Assault or Molestation" paragraph="Help report Assault and Molestation cases"/>
            </div>
            <button className="startBtn">Get Started</button>
        </div>
    )
}
export default Home;