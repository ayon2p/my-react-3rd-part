import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours,setFours] = useState(0);
    const [singleRun,setSingles]= useState(0);

    const handleSingles=()=>{
        const singles = runs + 1;
        const updateSingles = singleRun+ 1;
        setSingles(updateSingles)
        setRuns(singles)
    }
    const handleFour=()=>{
        const four = runs +4;
        const updateFours = fours+1;
        setFours(updateFours)
        setRuns(four)
    }
    const handleSix=()=>{
        const six = runs + 6;
        const updateSixs = sixes + 1;
        setSixes(updateSixs)
        setRuns(six)
    }
    return(
        <div>
            <h3>player :Batsman</h3>
            <p>six: {sixes}</p>
            <p><small>four: {fours}</small></p>
            <p><small>single : {singleRun}</small></p>
           {
            runs > 50 && <h1>your score: 50</h1>
           } 
          <h1>score: {runs} </h1>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}