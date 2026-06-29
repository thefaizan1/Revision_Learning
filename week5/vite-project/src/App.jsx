import { useState } from 'react'
import Todo from './Todo'

function App() {
  const [todos,setTodos]=useState([
    {
    title:"Code",
    description:"Do Coding"
  }
])

  return (
    <>
      {
        todos.map(function(todos){
          return(
          <Todo
          title={todos.title}
          description={todos.description}
          />
        )
        })
      }
      <button onClick={function(){
        setTodos([
          ...todos,
          {
            title:"Random",
            description:"Random"
          }
        ])
      }
      
      
      }>Add a Random Todo</button>
    </>
  )
}


export default App
