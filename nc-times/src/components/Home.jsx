import { useState, useEffect } from "react"
import Loading from "../resources/Loading"
import TitleStyle from "../resources/TitleStyle"
import HomeBox from "./HomeBox"



function Home() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    })


    return (<>
        {loading ? (<><Loading /></>) : (
            <div className="home">
                <TitleStyle>
                <div className="wrapper">
  <div className="bg"> Nc Times </div>
  <div className="fg"> Nc Times</div>
</div>
                </TitleStyle>
                <h1>Latest news:</h1>
                <HomeBox/>
                    
            </div>
        )}
    </>
    )
}
export default Home