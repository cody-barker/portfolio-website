import headshot from '../assets/Cody_Barker_Headshot.jpg'

function Home() {

  function onBtnClick(url) {
    window.open(url, '_blank')
  }

  return(
    <div className="container">
      <img src={headshot} alt="headshot"/>
      <div className="home-header">
        <p>Hello! I'm</p>
        <h1>Cody Barker</h1>
        <p>A Full-Stack Software Engineer with a focus on React, JavaScript, and Ruby on Rails.</p>
        <div className="home-buttons-container">
          <button onClick={() => onBtnClick('https://drive.google.com/file/d/1n2ZNSdGDth-0gedkApnKqj9REJDzobSM/view?usp=sharing')}>Resume</button>
          <button onClick={() => onBtnClick('https://www.linkedin.com/in/barkercody/')}>LinkedIn</button>
          <button onClick={() => onBtnClick('https://github.com/cody-barker')}>Github</button>
          <button onClick={() => onBtnClick('https://dev.to/codybarker')}>Dev.to</button>
        </div>
      </div>
    </div>
  )
}

export default Home