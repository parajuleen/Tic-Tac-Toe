import React from "react";

const Gameboard = ({ btn, clickHandle ,disable}) => {
  return (
    <>
      <div className="gamecontainer">
        {btn.map((buttons,index)=>{
          return(
         <button  key={index} onClick={()=>clickHandle(index)} className="box" disabled= {disable[index]}>
          <span className="move"> {buttons}</span>
         
         </button>
          )
        })}
      </div>
    </>
  );
};

export default Gameboard;
