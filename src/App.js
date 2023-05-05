import './App.css';
import Testimony from './components/Testimony.js';

function App() {
  return (
    <div className="App">
      <div className="main-container">
      <h1>This is what our students say about freeCodeCamp:</h1>
      <Testimony
      name="Shawn Wang"
      country="Singapur"
      position="Software Engineer"
      company="Amazon"
      img="Shawn's"
      testimonial="It's scary to change careers. I only gained the confidence that I could program by working through the hundreds of hours of free lessons at freeCodeCamp. Within a year I had a six-figure job as a software engineer." />
      <Testimony
      name="Sarah Chima"
      country="Nigeria"
      position="Software Engineer"
      company="ChatDesk"
      img="Sarah's"
      testimonial="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my programming skills from a total beginner level to a very confident level. It was everything I needed to get my first developer job at an amazing company." />
      <Testimony
      name="Emma"
      country="Sweden"
      position="Software Engineer"
      company="Spotify"
      img="Emma's"
      testimonial="I've always had trouble learning JavaScript. I've taken many courses, but the freeCodeCamp course was the one that stuck. Studying JavaScript, as well as data structures and algorithms at freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />
      </div>
    </div>
  );
}

export default App;
