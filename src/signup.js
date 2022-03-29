const SignUp=()=>{
    return(
        <div className="signUp">
         <div className="box">
         <form >   
            <h1>SignUp</h1>
            <label>Name</label>
            <div className="inputIn">
            <input type="text"></input>
            </div>
            <label>Email</label>
            <div className="inputIn">
            <input type="text"></input>
            </div>
            <label>Phone Number</label>
            <div className="inputIn">
            <input type="text"></input>
            </div>
            <label>Password</label>
            <div className="inputIn">
            <input type="text"></input>
            </div>
            <label>Confirm password</label>
            <div className="inputIn">
            <input type="text"></input>
            </div>
            <button>Submit</button>
         </form>
         </div>
        </div>
    )
 }
 export default SignUp;