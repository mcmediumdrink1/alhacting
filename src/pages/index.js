import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Video from "../components/video"


export default function Home() {
  return (
    <div style={{ color: `lavenderblush` }}>
      <Link to="/contact/">Contact</Link><br></br>
      <Link to="/about/">About</Link>
      <Header headerText="Hello! I'm Amy Heller. Please come back soon to see more."></Header>
      <Video> <iframe className="video-container"src="https://www.youtube.com/embed/-odWubJwY-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Video>
<p>-Amy</p>
    </div>
  )
}