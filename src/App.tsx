import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodosSummary from "./components/TodosSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-sm p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
        <TodosSummary todos={todos} deleteAllCompleted={deleteAllCompleted}/>
      </div>
    </main>
  )
}

export default App
