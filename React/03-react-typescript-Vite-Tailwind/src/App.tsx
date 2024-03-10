import { dummyData } from "./data/todos";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  const[todos,setTodos] = useState(dummyData);

  function setTodoCompleted(id:number,completed:boolean){
      alert(
        `Todo with id ${id} is now ${completed ? "completed" :"not completed"}`
      );
  }
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-4xl text-center">Your todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-3">

        <div className="">
            {dummyData.map(todo =>(
              <TodoItem
              todo={todo}
              key={todo.id}
              onCompletedChange={setTodoCompleted}
              />
            ))}
        </div>
      </div>
    </main>
  )
}

export default App
