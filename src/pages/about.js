import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="Amy Heller" />
      <Header headerText="Actress. Writer. Producer." />
      <p>
          Learn more about my project, <a href="https://www.gofundme.com/f/my-little-renaissance-girl-film"> "My Little Renaissance Girl" </a>
      </p>
    </div>
    </Layout>
  )
}