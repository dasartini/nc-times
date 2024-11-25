import { getAllArticles } from "./api";

function getMiniBox(){
getAllArticles().then((data)=>{
    const minibox = data.splice(0,8)
    return minibox
})
}

export default getMiniBox