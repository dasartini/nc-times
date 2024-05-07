import { useState, useEffect } from "react"
import Loading from "../resources/Loading"



function  Home(){

    const [loading ,setLoading] = useState(true)

    useEffect(()=>{
    setLoading(false)
    })


    return(<>
        {loading?  (<><Loading/></>) : (<p>HomeWzzzebsite</p>)}
        </>
    )
}
export default Home