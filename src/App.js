import './App.css';
import useTypingDoge from "./useTypingDoge"

function App() {
  const [textBoxRef, handleChange,text,timeRemaining,startGame,isTimeRunning,wordCount] = useTypingDoge()  
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
            
            <button className="btn btn-success btn-lg"
                onClick={startGame}
                disabled={isTimeRunning}
            >Start
            </button>
            <h1 className="h1">Typing Speed: {wordCount} wpm.</h1>
            </div>
  );
}

export default App;
