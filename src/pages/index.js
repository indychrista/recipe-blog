import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/chickenSkewers.jpg"
            alt="grilling yummy food"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>yummy recipes</h1>
              <h4>no fluff, just good stuff</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
