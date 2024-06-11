import { Link } from "react-router-dom"
import NavStyle from "../resources/NavStyle"
import { useContext, useState, useEffect } from "react"
import { LogInContext } from "../context/LogIn"
import { LogInStatusContext } from "../context/LoginStatus"
import GoodBox from "../resources/GoodBox"

function NavBar() {
	const {logIn, setLogIn} = useContext(LogInContext)
	const {isLogIn, setIsLogIn} = useContext(LogInStatusContext)

	useEffect(() => {
		const storedIsLogIn = localStorage.getItem('isLogIn');
		if (storedIsLogIn === 'true') {
		  setIsLogIn(true);
		  setLogIn(localStorage.getItem('logIn'))
		}
	  }, [setIsLogIn, logIn]);

	function handleLogOut() {
		setIsLogIn(false)
		setLogIn('')
		localStorage.setItem('isLogIn', false)
	
	}
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
					{!isLogIn? <Link to={"/Login"}>Log In</Link>:<>  <>  Logged as {logIn}</></>   }
					
				</span>
				<span 
				 className="nav-item">
					<span className="icon">
						<i data-feather="star"></i>
					</span>
					<button  hidden={!isLogIn} className="button-85" onClick={handleLogOut}>LogOut<><br></br></></button> 
					</span>
			</nav>
		</NavStyle>
	</>)
}

export default NavBar