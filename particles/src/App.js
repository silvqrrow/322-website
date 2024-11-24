import "./App.css";
import ParticlesComponent from "./components/particles";

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div className="container">
        <h1 className="container__header">Group 26.</h1>
        <p>Owen, Ghaith, Antony, Yu Chen, Mitchell, & Jasmine</p>
      </div>
      <h2>Assignment 1</h2>
      <div className="assignment-1">
        <div className="a1-pdf">
          <iframe
            src={`${process.env.PUBLIC_URL}/322-A1.pdf`}
            title="Assignment 1 PDF"
            width="750"
            height="500"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <div className="a1-yt">
          <iframe
            src="https://www.youtube.com/embed/U15nOaj6m2w"
            title="Assignment 1 YouTube Video"
            width="750"
            height="500"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
      <h2>Assignment 2</h2>
      <div className="assignment-1">
        <div className="a1-pdf">
          <iframe
            src={`${process.env.PUBLIC_URL}/322-A2.pdf`}
            title="Assignment 1 PDF"
            width="750"
            height="500"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <div className="a1-yt">
          <iframe
            src="https://www.youtube.com/embed/zqS_HAbexnQ"
            title="Assignment 2 YouTube Video"
            width="750"
            height="500"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
