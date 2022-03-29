import { Link } from "react-router-dom";
import pic from "./intern1n.png"

const Navbar=()=>{
    return(
         <nav className="navbar">
                  <div className="img"><img src={pic} /></div>
                 <div className="navBlack">
                 <Link to="/">Home</Link>
                     <Link to="/countries">Countries</Link>
                     <Link to="/universities">Universities</Link>
                     <Link to="/courses">Courses</Link>
                     <Link to="/Exams">Exams</Link>
                     <Link to="/Events">Events</Link>
                 </div>
                 <div className="links">
                 <Link to="/store">Store</Link>
                 <Link to="/Talk_to_counsellor">Talk To Counsellor</Link>
                 </div>
                 <div className="linkss">
                 <Link to="/Login">Login</Link>
                 <Link to="/signup" >Sign Up</Link>
             </div>
         </nav>
    )
}

export default Navbar;