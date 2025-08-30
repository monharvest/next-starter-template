import './globals.css'
import Header from '../components/Header'
import FeaturedGrid from '../components/FeaturedGrid'
import ArticleCard from '../components/ArticleCard'
import Sidebar from '../components/Sidebar'
import React from 'react'

const sampleArticles = [
  {title:"The Quiet Power of Local Cafés", excerpt:"How neighbourhood cafés build community and creativity.", image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop", date:"Aug 8, 2025", author:"J. Diaz", category:"Culture"},
  {title:"Designing for Slow Travel", excerpt:"Move slowly and see more — a designer’s approach to travel.", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop", date:"Aug 4, 2025", author:"A. Kumar", category:"Travel"},
  {title:"Color Trends in 2025", excerpt:"A quick guide to the colors shaping interiors and product design.", image:"https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1200&auto=format&fit=crop", date:"Jul 28, 2025", author:"M. Lee", category:"Design"},
  {title:"A Walkable City Guide", excerpt:"The neighborhoods that make walking a pleasure.", image:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop", date:"Jul 21, 2025", author:"S. Park", category:"Travel"},
  {title:"At-home Herb Gardens", excerpt:"Small windowsills that produce big flavors.", image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop", date:"Jul 18, 2025", author:"L. Gomez", category:"Food"},
  {title:"The Resurgence of Print", excerpt:"Why magazines still matter in a digital world.", image:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop", date:"Jul 10, 2025", author:"T. Nguyen", category:"Culture"},
];

export default function Page(){
  const featured = sampleArticles.slice(0,3)
  const more = sampleArticles.slice(3)
  const popular = sampleArticles.slice(0,4)

  return (
    <main>
      <Header />
      <section className="hero container" aria-label="Featured story">
        <div className="hero-content">
          <div className="eyebrow">Feature</div>
          <h1>Why Slow Travel Is the New Luxury</h1>
          <p>Rediscover places by lingering longer — the tips, routes, and spaces that reward patience.</p>
        </div>
      </section>

      <FeaturedGrid items={featured} />

      <section className="container main-grid" style={{alignItems:"start"}}>
        <div>
          {more.map((a, idx) => (
            <div key={idx} style={{marginBottom:16}}>
              <ArticleCard article={a}/>
            </div>
          ))}
        </div>

        <div>
          <Sidebar popular={popular}/>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} MonHarvest Magazine — Built with Next.js
      </footer>
    </main>
  )
}