import Animation4 from "../components/Animation4";

function Login(){
    return(
        <div className="register">
            
            <div className="topum">
                <Animation4 top="Keep your Country and yourself"/>
                <img src="https://remar.org/wp-content/uploads/2020/08/2985-1024x843.png" alt="Nigeria" />
            </div>
            <form action="" className="form-two">
                <div>
                    <div className="coloumnLog">
                        <input type="text" placeholder="Enter Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="center">
                        <button className="logInBtn" type="submit">Log In</button>
                    </div>
                </div>
            </form>
            <p className="privacy">Don't have an account? <span>Register here.</span></p>
        </div>
    )
}
export default Login;   