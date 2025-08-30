import React from "react";
import Image from "next/image";
type PopularItem = {
  title: string;
  image: string;
  date: string;
};

export default function Sidebar({ popular }: { popular: PopularItem[] }) {
  return (
    <aside className="sidebar">
      <div className="card">
        <h4>Popular</h4>
        {popular.map((p, i) => (
          <div className="popular-item" key={i}>
            <img src={p.image} alt={p.title} />
            <div>
              <div className="title">{p.title}</div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>{p.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card newsletter">
        <h4>Newsletter</h4>
        <p>Get weekly highlights from the magazine.</p>
        <input type="email" placeholder="you@example.com" />
        <button>Subscribe</button>
      </div>

      <div className="card">
        <h4>Categories</h4>
        <ul style={{ paddingLeft: 16, color: "var(--muted)" }}>
          <li>Culture</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Food</li>
        </ul>
      </div>
    </aside>
  );
}
