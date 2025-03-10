import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-Box'>
          <div>
            <h2 className='Subtitle'>
              Hi there!
            </h2>
            <h1 className='Title'>
              I'm Aakanksha.
            </h1>
            <p>
              I'm a first-year MMath student at the David R. Cheriton School of Computer Science at the University of Waterloo.
              I'm supervised by <a className="ExternalLink" href="http://edithlaw.ca" target="_blank">Dr. Edith Law</a> in the <a className="ExternalLink" href="http://hci.cs.uwaterloo.ca" target="_blank">human-computer interaction (HCI) lab</a>.
            </p>
            <div>
              <a className="InternalLink" href="">Work</a>
              <a className="InternalLink" href="">Projects</a>
              <a className="InternalLink" href="./CV.pdf" target='_blank'>CV</a>
            </div>
          </div>
          <img src={"./aakanksha.jpeg"} className="App-logo" alt="A picture of Aakanksha standing on a big rock" />
        </div>

      </header>
    </div>
  );
}

export default App;
