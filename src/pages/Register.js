import Animation4 from "../components/Animation4";

function Register(){
    return(
        <div className="register">
             <div className="topum">
                <Animation4 top="Join us in keeping Everyone"/>
                <img src="https://remar.org/wp-content/uploads/2020/08/2985-1024x843.png" alt="Nigeria" />
            </div>
            <form action="">
                <input className="firstFormInput" type="text" placeholder="Full name"/>
                <div className="arrangeForm">
                    <input type="text" placeholder="Email"/>
                    <input type="number" placeholder="Phone Number"/>
                </div>
                <div className="arrangeForm">
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                </div>
                <div className="center">
                    <button className="logInBtn" type="submit">Register</button>
                </div>
            </form>
                <p className="privacy">Already have an account? <span>Log in Here.</span></p>
        </div>
    )
}
export default Register;

