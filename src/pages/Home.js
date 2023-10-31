import headshot from '../assets/Cody_Barker_Headshot.jpg'

function Home() {
  return(
    <div className="container">
      <h1>cb.</h1>
      <img src={headshot} alt="headshot"/>
    </div>
  )
}

export default Home