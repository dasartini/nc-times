import axios from 'axios'

export function getAllArticles(subject, sequence, order) {
    return axios.get('https://project-nc-news-adrian-sartini.onrender.com/api/articles/?',
{params :{
    topic: subject,
    sort_by: sequence,
    sort_dir: order,
}}).then((data) => {
            return data.data.articles
        })
}

export function getArticleById(article_id) {
    return axios.get(`https://project-nc-news-adrian-sartini.onrender.com/api/articles/${article_id}`)
        .then((data) => {
            return data.data.article
        })
}

export function getCommentsByArticleId(article_id) {
    return axios.get(`https://project-nc-news-adrian-sartini.onrender.com/api/articles/${article_id}/comments`)
        .then((data) => {
            return data.data.comments

        })
}

export function patchArticleById(article_id, newVote) {
    const votes = { inc_votes: newVote }
    return axios.patch(`https://project-nc-news-adrian-sartini.onrender.com/api/articles/${article_id}`, votes)
        .then((data) => {
            return data.data.article.votes
        })
}

export function postArticleById(article_id, newComment) {


    return axios.post(`https://project-nc-news-adrian-sartini.onrender.com/api/articles/${article_id}/comments`, newComment)
        .then((data) => {
            return data.data.newComment.body
        })

}

export function getAllUsers() {
    return axios.get("https://project-nc-news-adrian-sartini.onrender.com/api/users/")
        .then((data) => {
            return data.data.users
        })

}

export function deleteCommentById(comment_id) {
    return axios.delete(`https://project-nc-news-adrian-sartini.onrender.com/api/comments/${comment_id}`)
        .then((data) => {
            return data
        })
 
}

