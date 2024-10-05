import { Todo } from "../types/todo";

interface TodosSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}
export default function TodosSummary({
    todos,
    deleteAllCompleted
}: TodosSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);
    return (    
        <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && 
                <button
                    className="text-red-600 text-sm"
                    onClick={deleteAllCompleted}
                >Delete all completed</button>
            }
        </div>
    );
}