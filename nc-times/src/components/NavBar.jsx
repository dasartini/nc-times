import { Link } from "react-router-dom"
import NavStyle from "../resources/NavStyle"
import { useContext, useState, useEffect } from "react"
import { LogInContext } from "../context/LogIn"
import { LogInStatusContext } from "../context/LoginStatus"

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
  <nav className="menu">
    <span className="nav-item">
      <Link to="/">Home</Link> {/* React Router Link for Home */}
    </span>
    <span className="nav-item">
      <Link to="/allArticles">All Articles</Link> {/* React Router Link for All Articles */}
    </span>
    <span className="nav-item">
      {!isLogIn ? <Link to="/Login">Log In</Link> : <>Logged in as {logIn}</>}
    </span>

      <button hidden={!isLogIn} className="button-85" onClick={handleLogOut}>Log Out</button>
 
  </nav>
</NavStyle>
	
		{/* <NavStyle>
			<nav className="menu">

			<Link to={'/'}>
				<span className="nav-item">
					Home
				</span>
				</Link>

				<Link to={'/allArticles'}>
				<span className="nav-item">
					All Articles
				</span>
				</Link>

				<span className="nav-item">
					</span>
					{!isLogIn? <Link to={"/Login"}>Log In</Link>:<>  <>  Logged as {logIn}</></>   }
					
				<span 
				 className="nav-item">
					<span className="icon">
						<i data-feather="star"></i>
					</span>
					<button  hidden={!isLogIn} className="button-85" onClick={handleLogOut}>LogOut<><br></br></></button> 
					</span>
			</nav>
		</NavStyle> */}
	</>)
}

export default NavBar