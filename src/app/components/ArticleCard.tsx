import React from "react";

type Article = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category?: string;
};

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <img src={article.image} alt={article.title} />
      <div>
        <div className="meta">{article.date} • {article.author}</div>
        <h4>{article.title}</h4>
        <p>{article.excerpt}</p>
      </div>
    </article>
  );
}
