import { Link } from "react-router-dom"
import NavStyle from "../resources/NavStyle"
import { LogInContext } from "../context/LogIn"
import { useContext } from "react"
import { LogInStatusContext } from "../context/LoginStatus"


function NavBar() {

const {logIn, setLogIn} = useContext(LogInContext)
const {isLogIn, setIsLogIn} = useContext(LogInStatusContext)

	return (<>
		<NavStyle>
			<nav className="menu" id="nav">
				<span className="nav-item active">
					<span className="icon">
						<i data-feather="home"></i>
					</span>
					<Link to={'/'}>Home</Link>
				</span>
				<span className="nav-item">
					<span className="icon">
						<i data-feather="search"></i>
					</span>
					<Link to={'/allArticles'}>All Articles</Link>
				</span>
				<span className="nav-item">
					<span className="icon">
						<i data-feather="bell"></i>
					</span>
					<a href="#">Notifications</a>
				</span>
				<span className="nav-item">
					<span className="icon">
						<i data-feather="star"></i>
					</span>
					<a href="#">Favorites</a>
				</span>
				<span className="nav-item">
					<span className="icon">
						<i data-feather="bell"></i>
						
					</span>
					<Link to={"/Login"}>Login</Link>
				</span>
			</nav>
		</NavStyle>
	</>)
}

export default NavBar