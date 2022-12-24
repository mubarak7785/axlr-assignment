import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar=()=>{
    return(
        <div className="hi">
            <Link to="/home"><p>Home</p> </Link>
             <Link to="/"><p> Products</p></Link> 
            <Link to="/sign"><p>SignIn</p> </Link>
        </div>
    )
}