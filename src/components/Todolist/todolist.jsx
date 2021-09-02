import Todo from "../Todo/todo";
const Todolist = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => ( //map menen generation bolup atat, kelgen todo-lardy render kylyp atat.  C:Todo
            <Todo key={todo.id}
            {...todo} //text-ter kelip atat
            onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
)
export default Todolist;