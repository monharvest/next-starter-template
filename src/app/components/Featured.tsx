import React from "react";

type FeaturedItem = {
  title: string;
  excerpt: string;
  image: string;
  date?: string;
  author?: string;
  category?: string;
};

export default function FeaturedGrid({ items }: { items: FeaturedItem[] }) {
  return (
    <section className="container">
      <div className="featured-grid">
        {items.map((it, idx) => (
          <article className="featured-card" key={idx}>
            <img src={it.image} alt={it.title} />
            <div className="fc-body">
              <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, marginBottom: 6 }}>
                {it.category}
              </div>
              <h3>{it.title}</h3>
              <p>{it.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
