import '../components/MyTodos.css';

const MyTodos = ({ todos, updateStatus, editTodo, deleteTodo }) => {
    const handleStatusChange = (id, event) => {
        updateStatus(id, event.target.value);
    };
    

    return (
        <div className="todos-container">
            {todos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todo-card">
                            <p>Name: {todo.name}</p>
                            <p>Description: {todo.description}</p>
                            <div className="todo-status">
                                <label htmlFor={`status-${todo.id}`}>Status: </label>
                                <select
                                    id={`status-${todo.id}`}
                                    value={todo.status}
                                    onChange={(event) => handleStatusChange(todo.id, event)}
                                    className={`status-select ${todo.status === 'Completed' ? 'status-completed' : 'status-not-completed'}`}
                                >
                                    <option value="Not Completed">Not Completed</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="todo-actions">
                                <button onClick={() => editTodo(todo.id)}>Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyTodos;
