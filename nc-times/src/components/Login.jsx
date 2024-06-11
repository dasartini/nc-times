import GoodBox from "../resources/GoodBox"
import { useContext, useEffect, useState } from "react"
import LoginStyle from "../resources/LoginStyle"
import { getAllUsers } from "../api"
import { LogInContext } from "../context/LogIn"
import { LogInStatusContext } from "../context/LoginStatus"
import Home from "./Home"

function Login(){
const {logIn, setLogIn} = useContext(LogInContext)
const {isLogIn, setIsLogIn} = useContext(LogInStatusContext)


function handleSubmit(event){
event.preventDefault()

getAllUsers().then((data)=>{
	for(let userData of data){
	if( logIn === userData.username){

		setLogIn(userData.username)
		localStorage.setItem('isLogIn', true)
		localStorage.setItem('logIn', userData.username)
		return setIsLogIn(true)
	}
	else { console.log('not correct')
		setLogIn('')
		localStorage.setItem('isLogIn', false)
		localStorage.setItem('logIn', '')
		setIsLogIn(false)}
	}
})

}
useEffect(()=>{},[setIsLogIn, logIn])


return(<>
{isLogIn==true? <Home/>: <GoodBox>
        <LoginStyle>
        <div className="loginStyle">
	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
				Get started
				<small>Please log in</small>
			</h2>
		</div>
		<form className="card-form"
        onSubmit={(event)=>{handleSubmit(event)}}>
			<div className="input">
				<input type="text" className="input-field" value={logIn}
                onChange={(event)=>{setLogIn(event.target.value)}}
                required/>
				<label className="input-label">Username</label>
			</div>
			<div className="action">
				<button className="action-button">Get started</button>
			</div>
		</form>
		<div className="card-info">
			<p>By signing up you are giving us all your data</p>
		</div>
	</div>
</div>   
</LoginStyle> 
</GoodBox>  }

   
</>)
}

 export default Login