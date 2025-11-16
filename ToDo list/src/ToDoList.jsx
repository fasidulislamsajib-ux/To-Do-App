import { useState, useEffect } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md"




function ToDoList() {
  let [todo, setTodo] = useState([]);

  let handelAddTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, "New Todo"]);
    setText("");
  }

  const [text, setText] = useState("")

  const newTodo = {
    id: Date.now(),
    text: "",
    completed: false,
  }


  return (
    <section>
      <div className='flex justify-center items-start min-h-screen bg-amber-300 p-4'>
        <div className="bg-white
         shadow-lg
          rounded-2xl 
          p-6 w-full 
          max-w-md gap-[20px] 
          flex flex-col 
          items-center-safe">
          <h1 className='text-3xl 
          font-bold
           text-blue-600 
           text-center 
           md-4'>To-Do List</h1>


          <form className=' flex
          items-center
          border border-green-500 rounded-lg overflow-hidden md-4'>
            <input
              className='flex-1 p-2 outline-none'
              value={text}
              type="text"
              placeholder='Type new To-Do'
              onChange={(e) => setText(e.target.value)} />

            <button

              onClick={handelAddTodo}
              className='bg-green-800 text-white
            px-4 py-2 cursor-pointer hover:text-black font-bold'>

              Add
            </button>
          </form>

          <ul className='space-y-2' >
            {todo.map((todo) => {
              return (
                <li className="flex 
              justify-between 
              items-center
               bg-white p-2 
               shadow rounded-lg
                hover:bg-pink-100
                 transition-all">
                  <div className="iniput flex items-center space-x-2 ">
                    <input className='w-5 h-5
                       accent-green-500'
                      type="checkbox" />
                    <p className='text-gray-400'>
                      {todo}
                    </p>
                    <div className="flex items-center justify-between">
                    </div>
                  </div>
                  <div className="flex gap-2 ju">
                    <span className="text-blue-500 text-2xl"> <MdEdit /> </span>
                    <span className="text-red-500 text-2xl <MdDeleteForever />"><MdDeleteForever /></span>
                  </div>
                </li>
              )
            }
            )}


          </ul>
          {todo.length > 0 && (
            <button className="bg-red-500
           text-white 
           rounded px-1
            py-2 mt-4
             hover:bg-red-700 
             transition <MdDeleteForever /> w-full">
              Clear all
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ToDoList
