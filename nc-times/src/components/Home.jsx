import { useState, useEffect } from "react"
import Loading from "../resources/Loading"



function  Home(){

    const [loading ,setLoading] = useState(true)

    useEffect(()=>{
    setLoading(false)
    })


    return(<>
        {loading?  (<><Loading/></>) : (
            <div className="home">
        <h1>Welcome to NC times</h1>
        <img src="https://dudewipes.com/cdn/shop/articles/gigachad.jpg?v=1667928905&width=2048"></img>
        </div>
        )}
        </>
    )
}
export default Home