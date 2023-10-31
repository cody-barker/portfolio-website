import headshot from '../assets/Cody_Barker_Headshot.jpg'

function Home() {
  return(
    <div className="container">
      <img src={headshot} alt="headshot"/>
      <div className="home-header">
        <p>Hello! I'm</p>
        <h1>Cody Barker</h1>
        <p>A Full-Stack Software Engineer with a focus on React, JavaScript, and Ruby on Rails.</p>
        <div className="home-buttons-container">
          <button>Resume</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
          <button>Dev.to</button>
        </div>
      </div>
    </div>
  )
}

export default Home