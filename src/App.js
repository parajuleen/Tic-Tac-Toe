
import { useEffect, useState } from 'react';
import './App.css';
import Gameboard from './Components/Gameboard';
import Message from './Components/Message';
import winSound from './Assets/win.wav'

function App() {
  

  const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
  ]

  

const[buttons,setButtons]=useState([ '','','','','','','','','',])
const[isXturn, setXTurn] = useState(true)  
const[disable,setDisable]=useState([]);  
const [winner,setWinner]=useState({
  player:"",
  status:false
})

const playSound=()=>{
  const audio= new Audio(winSound)
  audio.play()

}

const handleClick=  (index)=>{
  const newButton= [...buttons];
  newButton[index]= isXturn ?"X" : "O" ;
  setButtons(newButton);
  setXTurn(!isXturn)

  const disabledbtns=[...disable]
  disabledbtns[index]=true;
  setDisable(disabledbtns)
 
 
}
useEffect(() => {
  setTimeout(()=>{
    checkWin()
  },100)
}, [buttons])


const handleReset=()=>{
  setButtons(['','','','','','','','','']);
  setDisable([]);
  setWinner(
    {player:"",status:false}
  )

}

const checkWin=() =>{
winPattern.forEach((i)=>{
  
  if(buttons[i[0]]!='' && buttons[i[1]]!='' && buttons[i[2]])
  {
    if (buttons[i[0]]===buttons[i[1]] && buttons[i[1]] === buttons[i[2]])
    {
      setWinner({
        player: buttons[i[0]],
        status: true,
      })
      setTimeout(()=>{
        handleReset()
      },4000)

      playSound()


    }
}
}
)};


 
  return (
   <>

   <div className="container">
   {winner.status ? <Message winner={winner}/>:<>
   <h1> Tic Tac Toe</h1>
   <Gameboard btn={buttons} clickHandle={handleClick} disable={disable}/>
   </>}
   <button className='reset' onClick={handleReset} >Reset</button>
   
  

   </div>
   
   </>
  );
}

export default App;
