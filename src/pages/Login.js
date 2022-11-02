function Login(){
    return(
        <div className="register">
            <p className="brother">Keep your <span>Country</span> and <span>Yourself</span> safe.</p>
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