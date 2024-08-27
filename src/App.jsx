import { useState } from 'react'
import './App.css'
import data from './component/menudata.json'


function App() {
  const [getData, setData] = useState(data)
  const filtermenu=(c)=>{
       if(c==='all'){
        setData(data)
       }else{
        let newData=data.filter((val)=>val.catg===c)
        setData(newData)
       }
  }
  return (
    <>
     <div className="menu">
          <h1>Our Menu</h1>
       </div>
       <div className="btn">
        <button onClick={()=>filtermenu('all')}>All</button>
        <button onClick={()=>filtermenu('Breakfast')}>Breakfast</button>
        <button onClick={()=>filtermenu('Lunch')}>Lunch</button>
        <button onClick={()=>filtermenu('shakes')}>Shakes</button>
       </div>
       <div className="cards">
       {getData.map((v,k)=>{
        return(
          <div className="card" key={k}>
          <img src={v.img} alt="" />
          <div className="price">
          <h1>{v.title}</h1>  
            <h5>{v.price}</h5>
          </div>
          <p>{v.des}</p>
          </div>
         )
       })}
        </div>
    </>
  )
}

export default App
