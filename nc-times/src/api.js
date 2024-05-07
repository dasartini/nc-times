import axios from 'axios'

export function getAllArticles(){
    return axios.get('https://project-nc-news-adrian-sartini.onrender.com/api/articles')
    .then((data)=>{
        return  data.data.articles
    })
    
}