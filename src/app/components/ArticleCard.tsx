import React from "react";

export default function ArticleCard({article}:{article:any}){
  return (
    <article className="article-card">
      <img src={article.image} alt={article.title}/>
      <div>
        <div className="meta">{article.date} • {article.author}</div>
        <h4>{article.title}</h4>
        <p>{article.excerpt}</p>
      </div>
    </article>
  )
}