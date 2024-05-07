import axios from 'axios'

export function getAllArticles() {
    return axios.get('https://project-nc-news-adrian-sartini.onrender.com/api/articles')
        .then((data) => {
            return data.data.articles
        })
}

export function getArticleById(article_id) {
    return axios.get(`https://project-nc-news-adrian-sartini.onrender.com/api/articles/${article_id}`)
        .then((data) => {
            return data.data.article
        })
}

export function getCommentsByArticleId(article_id){
    return axios.get(`https://project-nc-news-adrian-sartini.onrender.com/api/articles/${article_id}/comments`)
    .then((data)=>{
        return data.data.comments
        
    })
}

export function patchArticleById(article_id){
const votes= {inc_votes: 1}
return axios.patch(`https://project-nc-news-adrian-sartini.onrender.com/api/articles/${article_id}`, votes )
.then((data)=>{
    return data
})
}