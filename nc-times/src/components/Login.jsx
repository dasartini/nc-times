import GoodBox from "../resources/GoodBox"
import { useState } from "react"
import LoginStyle from "../resources/LoginStyle"
import { getAllUsers } from "../api"

function Login(){
const [user, setUser] = useState('')
function handleSubmit(event){
getAllUsers().then((data)=>{
setUser('')
console.log(data)
})
}


    return(<>
    <GoodBox>
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
				<input type="text" className="input-field" value={user}
                onChange={(event)=>{setUser(event.target.value)}}
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
</GoodBox>
</>)
}

//         <>
//         <GoodBox>
//         <form>
// <label className="login" htmlFor="login-input" >
// Provide your username
// </label>
// <input type="text"
// id="login-input"
// ></input>
//         </form>
//         <button className="button-85">LOG ME IN</button>
//         </GoodBox>
//     EEEEEEEEEEEEEEEEEEEE
//         </>


export default Login