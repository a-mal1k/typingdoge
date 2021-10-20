import {useState,useEffect, useRef} from "react"

function useTypingDoge(){
    const STARTING_TIME = 30
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    function calculateWordCount() {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    useEffect(() => {
       
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
                return end();
        }  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRemaining,isTimeRunning])
    
    function start() {
        setWordCount(0)
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    function end(){
        setIsTimeRunning(false)
        setWordCount(calculateWordCount())
    }
    function reset(){
        setWordCount(0);
        setText("");
        setIsTimeRunning(false);
        setTimeRemaining(0)
    }
    
    return [textBoxRef, handleChange,text,timeRemaining,start, reset,isTimeRunning,wordCount]
    
}
export default useTypingDoge;

