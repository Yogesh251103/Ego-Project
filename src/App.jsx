import { useState } from "react";
import "./App.css";

function App() {

  const [ego,setEgo] = useState(false);
  const [items,setItems] = useState([{value:"Respect",boolean:false},{value:"Happiness",boolean:false},{value:"Optimism",boolean:false},{value:"Kindness",boolean:false},{value:"Giving",boolean:false},{value:"Ego",boolean:false}]);

  const toggleHandler = (i) => {
    setItems((prev)=>{
      return prev.map((item)=>{
        if(i.value === "Ego"){
          setEgo(!ego);
          if(item.value === "Ego") return {...item,boolean:!item.boolean}
          else return {...item,boolean:false}
        }
        else{
          if(item.value === i.value && ego===false){
            return {...item,boolean:!item.boolean}
          }
          return item
        }
      })
    })
  }

  return (
    <div className="grid"> 
      {items.map((item) =>(
        
        <div key={item.value} className='grid-item'>
        {item.boolean ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{color:item.value==="Ego"?"tomato":"green"}} onClick={()=>toggleHandler(item)}>
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
  );

}

export default App;
