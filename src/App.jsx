import { useState } from "react";
import "./App.css";

function App() {

  const [ego,setEgo] = useState(false);
  const [shake,setShake] = useState(false);

  const [items,setItems] = useState([{value:"Respect",boolean:false},{value:"Happiness",boolean:false},{value:"Optimism",boolean:false},{value:"Kindness",boolean:false},{value:"Giving",boolean:false},{value:"Ego",boolean:false}]);

  const toggleHandler = (i) => {
    if(ego && i.value!="Ego"){ //when ego is selected, we can't select the other items
    setShake(true);
    setTimeout(()=>setShake(false),300);
    return; 
    } 
    setItems((prev)=>{
      return prev.map((item)=>{
        if(i.value === "Ego"){
          setEgo(!ego);
          if(item.value === "Ego") return {...item,boolean:!item.boolean}
          else return {...item,boolean:false} //when ego is selected, all the other items should be unselected
        }
        else{
          if(item.value === i.value){
            return {...item,boolean:!item.boolean}
          }
          return item
        }
      })  
    })
  }

  return (
    <>
    <h1 className="heading">Select the things you want in your life</h1>
    <div className="grid"> 
      {items.map((item) =>(
        
        <div key={item.value} className={`grid-item ${shake?"shake-top":""}`}>
        {item.boolean ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill={item.value==="Ego"?"tomato":"lightgreen"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg" style={{color:"#FFFED2"}} onClick={()=>toggleHandler(item)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        ):(
          <div  
            className='circle'
            onClick={()=>toggleHandler(item)}
          ></div>
        )}
        <p>{item.value}</p>

        </div>
      ))}
    </div>
    </>
  );

}

export default App;
