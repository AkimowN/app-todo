// import { Product } from "./componets/componet"
// import { data } from "./data/data"
// import {useState} from "react"

// interface Props {
//   name?: string
//   number: number
//   handler: () => void
// }


// const Counter = ({name = 'button', number, handler}: Props) => {
//   return (
//     <div>
//       <p>Counter: {number}</p>
//       <button onClick={handler}>{name}</button>
//     </div>
//   )
// }

// function App() {
//   console.log('render')
//   const [number, setNumber] = useState(0)

//   const handler = () => {
//     setNumber(number + 1)
//   }

//   const user = (
//     <div>
//       <p>Вася</p>
//       <p>23 года</p>
//     </div>
//   )

//   return (
//     <div>
//       {user}
//       <Counter name={'test'} number={number} handler={handler}/>
//       <Counter name={'Виталя'} number={number} handler={handler}/>
//       <Counter number={number} handler={handler}/>
//     </div>
//   )
// }

// export default App
import {Todo} from './Components/Todo'
import './App.scss'
import PlusIcon from './img/plusIcon.png'
import {useState, useEffect} from 'react'

const initTexts = (): string[] => {
  const raw = localStorage.getItem('texts')
  if (raw !== null) {
    return JSON.parse(raw)
  }
  return []
}

function App() {
  const [texts, setTexts] = useState<string[]>(initTexts)
  const [input, setInput] = useState('') 
  
  useEffect(()=>{
    localStorage.setItem('texts',JSON.stringify(texts))
  },[texts]) 

  const addItem = () => { 
    setTexts([...texts, input])
  }
  const removeTodo = (todoIndex: number) => {
    const newArr = texts.filter((e,index)=> index !== todoIndex)
    setTexts(newArr)
  }
  return (
    <div className="card">
      <p className='todoApp'>Todo App</p>
      <div className='addInput'>
        <input type="text" placeholder='Add your new todo' value={input} onChange={e => setInput(e.target.value)} className='input' />
        <button className='addButton' onClick={addItem} ><img src={PlusIcon}/></button>
      </div>
      <div className='texts'>
        {texts.map((text, index) => (
          <Todo key={index} text={text} removeTodo={() => removeTodo(index)}/>
        ))}
      </div>
      <div className='footerCard' >
        <p>You have {texts.length} pending  tasks</p>
        <button onClick={() => setTexts([])}>Clear All</button>
      </div>
    </div>
  )
}
export default App
