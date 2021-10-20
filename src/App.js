import './App.css';
import useTypingDoge from "./useTypingDoge"

function App() {
  const [textBoxRef, handleChange,text,timeRemaining,start,reset, isTimeRunning,wordCount] = useTypingDoge()  
  return (
    <div className="App">
      <h1 className="h1 text-light mb-5">How fast can you type?</h1>
      <h4 className="h4">Time remaining: {timeRemaining}</h4>
      <div id="textContainer">
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            </div>
            <div className="d-flex">
            <button className="btn btn-success btn-lg m-2"
                onClick={start}
                disabled={isTimeRunning}
            >Start
            </button>
            <button className="btn btn-danger btn-lg m-2"
                onClick={reset}
            >Reset
            </button>
            </div>
            
            <h1 className="h1">Typing Speed: {wordCount} wpm.</h1>
            </div>
  );
}

export default App;
