function Register(){
    return(
        <div className="register">
            <p className="brother">Join us in keeping <span>Everyone</span> safe.</p>
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

