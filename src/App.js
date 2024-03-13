import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-jluj.onrender.com/api'
})

export const getArticles = () => {
    return ncNewsApi.get("/articles").then((response) => {
        return response.data.allArticles;
    })
}

export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
      return response.data.article
    })
}

export const getComments = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((comments) => {
        return comments.data.comments
    })
}