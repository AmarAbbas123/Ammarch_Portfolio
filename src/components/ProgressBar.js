import React from "react";
import "./Navbar_style.css"


const ProgressBar = ({done,colors}) => {
  // create an empty object to use later see in style
  const [style, setStyle] = React.useState({});
 

  const col1 = () =>{

  }
  
  setTimeout(() => {
    const newStyle = {
        opacity: 1,
        width: `${done}%`,
        backgroundColor:`${colors}`
    }
    setStyle(newStyle);
  }, 1000);

  
  
  return (
    <>
    <div style={{
        height:"7px"
    }}
      class="progress">
      <div class="progress-done" style={style}>
        
      </div>
    </div>
      
    </>
  )
};


export default ProgressBar;