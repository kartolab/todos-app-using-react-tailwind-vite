import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [todo, setTodo] = useState("");

    function addTodo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!todo.trim()) return;

        onSubmit(todo);
        setTodo("");
    }

    return (
        <form className="flex" onSubmit={addTodo}>
            <input 
                type="text"
                placeholder="What need to be done?"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="border border-gray-400 grow rounded-s-md p-2"
            />
            <button
                type="submit"
                className="rounded-e-md bg-slate-900 hover:bg-slate-800 text-slate-50 w-16"
            >
                Add
            </button>
        </form>
    );
}