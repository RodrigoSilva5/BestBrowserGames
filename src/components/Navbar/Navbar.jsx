import "./styles.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <header className="navBar" >  
                <nav>
                    <ul>
                        <li> 
                            <a href="#">
                            Home
                            </a> 
                        </li>
                        <li>
                            <Link to={`Login`}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to={`SignUp`}>
                                SignUp
                            </Link>
                        </li>
                        <li>
                            <Link to={"AddGame"}>
                                AddGame    
                            </Link> 
                        </li>
                        <li>
                            <a href="#"> 
                                a
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export { Navbar } 