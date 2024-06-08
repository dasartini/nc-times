import { useState, useEffect } from "react"
import Loading from "../resources/Loading"
import TitleStyle from "../resources/TitleStyle"



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
  <div className="bg"> Nc News </div>
  <div className="fg"> Nc News</div>
</div>
                </TitleStyle>
                    <img className="chad" src="https://dudewipes.com/cdn/shop/articles/gigachad.jpg?v=1667928905&width=2048"></img>
              
            </div>
        )}
    </>
    )
}
export default Home