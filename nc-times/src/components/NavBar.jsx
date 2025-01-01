import { Link } from "react-router-dom";
import NavStyle from "../resources/NavStyle";
import { useContext, useState, useEffect, useRef } from "react";
import { LogInContext } from "../context/LogIn";
import { LogInStatusContext } from "../context/LoginStatus";
import logo from "../resources/images/logo.png";

function NavBar() {
	const { logIn, setLogIn } = useContext(LogInContext);
	const { isLogIn, setIsLogIn } = useContext(LogInStatusContext);
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const burgerRef = useRef(null);

	useEffect(() => {
		const storedIsLogIn = localStorage.getItem("isLogIn");
		if (storedIsLogIn === "true") {
			setIsLogIn(true);
			setLogIn(localStorage.getItem("logIn"));
		}
	}, [setIsLogIn, setLogIn]);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				menuRef.current && 
				!menuRef.current.contains(event.target) && 
				burgerRef.current && 
				!burgerRef.current.contains(event.target)
			) {
				setMenuOpen(false);
			}
		}

		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	function handleLogOut() {
		setIsLogIn(false);
		setLogIn("");
		localStorage.setItem("isLogIn", false);
	}

	return (
		<NavStyle>
			<div className="navBar">
				<img className="logo" src={logo} alt="Logo" />

				<div
					className="burgerMenu"
					ref={burgerRef}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? "✖" : "☰"}
				</div>

				<div ref={menuRef} className={`buttonsNav ${menuOpen ? "open" : ""}`}>
					<span className="nav-item">
						<Link to="/">Home</Link>
					</span>
					<span className="nav-item">
						<Link to="/allArticles">All Articles</Link>
					</span>
					<span className="nav-item">
						{!isLogIn ? (
							<Link to="/Login">Log In</Link>
						) : (
							<>Logged in as {logIn}</>
						)}
					</span>

					<button
						hidden={!isLogIn}
						className="button-85"
						onClick={handleLogOut}
					>
						Log Out
					</button>
				</div>
			</div>
		</NavStyle>
	);
}

export default NavBar;
