import { Link } from "react-router-dom"
import NavStyle from "../resources/NavStyle"
function NavBar (){

    return(<>
    <NavStyle>
    <nav class="menu" id="nav">
	<span class="nav-item active">
		<span class="icon">
			<i data-feather="home"></i>
		</span>
		<Link to={'/'}>Home</Link>
	</span>
	<span class="nav-item">
		<span class="icon">
			<i data-feather="search"></i>
		</span>
		<Link to={'/allArticles'}>All Articles</Link>
	</span>
	<span class="nav-item">
		<span class="icon">
			<span class="subicon">13</span>
			<i data-feather="bell"></i>
		</span>
		<a href="#">Notifications</a>
	</span>
	<span class="nav-item">
		<span class="icon">
			<i data-feather="star"></i>
		</span>
		<a href="#">Favorites</a>
	</span>
	<span class="nav-item">
		<span class="icon">
			<span class="subicon">1</span>
			<i data-feather="bell"></i>
		</span>
		<a href="#">Your Profile</a>
	</span>
</nav>
   </NavStyle>
    </>)
}

export default NavBar