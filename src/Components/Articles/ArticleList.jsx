import { useState, useEffect } from "react"
import { getArticles } from "../../App"
import ArticleCard from "./ArticleCard"

const ArticleList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((response) => {
            setArticles(response)
        })
    }, [])

    return (
        <>
        <main>
            <ul>
                {articles.map((article, index) => {
                    return <ArticleCard key={index} article={article}/>
                })}
            </ul>
        </main>
        </>
    )
}

export default ArticleList