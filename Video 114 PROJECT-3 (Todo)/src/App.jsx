import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoSting = localStorage.getItem("todos")
    if(todoSting){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
    
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id == id)
    setTodo(t[0].todo) 
    let newTodos = todos.filter(item =>{
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLs()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item =>{
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLs()
  }

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveToLs()

  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos =[...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLs()
  }
  

  return (
    <>
      <Navbar/>

      <div className='md:container mx-3 md:mx-auto md:w-[35%] my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
      <h1 className='font-bold text-center text-2xl'>iTask - Manage your todos at one place</h1>
        <div className="addtodo my-5 flex flex-col gap-4">
          <h2 className='text-xl font-bold'>Add a todo</h2>

          <div className="flex">
          <input onChange={handleChange} value={todo} className='w-full bg-white rounded-lg px-4 py-2' type="text" />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 hover:bg-violet-900 text-white disabled:bg-violet-600 px-3 py-0.5 rounded-lg mx-2 text-sm font-bold cursor-pointer'>Save</button>
          </div>

        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <label className='mx-2' htmlFor="show">Show Finished</label> 
         <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-xl font-bold my-4 '>Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className='m-4'>No Todos to display</div>  }
          {todos.map(item =>{

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3">
              <div className='flex gap-5'>
              <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-900 text-white px-4 py-1 rounded-md mx-2 cursor-pointer text-sm font-bold'><FaRegEdit /></button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-900 text-white px-4 py-1 rounded-md mx-2 cursor-pointer text-sm font-bold'><MdDelete /></button>
            </div>
          </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
