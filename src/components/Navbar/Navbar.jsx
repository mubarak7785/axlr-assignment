import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar=()=>{
    return(
        <div className="hi">
            <Link to="/home"><p>Home</p> </Link>
             <Link to="/pod"><p> Products</p></Link> 
            <Link to="/"><p>SignIn</p> </Link>
        </div>
    )
}