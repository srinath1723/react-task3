import React, { useState } from 'react';
import MyTodos from './MyTodos';
import '../components/TodoApp.css'; // Import the CSS file for styles

const TodoTask = () => {
    const [task, setTask] = useState({
        TodoName: '',
        Tododescription: '',
        StatusFilter: 'All'
    });

    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === currentTodoId
                        ? { ...todo, name: task.TodoName, description: task.Tododescription }
                        : todo
                )
            );
            setIsEditing(false);
            setCurrentTodoId(null);
        } else {
            const newTodo = {
                id: Date.now(),
                name: task.TodoName,
                description: task.Tododescription,
                status: 'Not Completed'
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        }
        setTask({ ...task, TodoName: '', Tododescription: '' });
    };

    const updateStatus = (id, newStatus) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, status: newStatus } : todo
            )
        );
    };

    const editTodo = (id) => {
        const todo = todos.find((todo) => todo.id === id);
        setTask({ TodoName: todo.name, Tododescription: todo.description, StatusFilter: task.StatusFilter });
        setIsEditing(true);
        setCurrentTodoId(id);
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const filteredTodos = todos.filter((todo) => {
        if (task.StatusFilter === 'All') return true;
        return todo.status === task.StatusFilter;
    });

    return (
        <div  className="task-container">
            <form onSubmit={handleSubmit} className="form-container">
                    <input
                        type="text"
                        name="TodoName"
                        required
                        placeholder="Todo Name"
                        value={task.TodoName}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="Tododescription"
                        required
                        placeholder="Todo Description"
                        value={task.Tododescription}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <button type="submit" className="submit-button">{isEditing ? 'Update Todo' : 'Add Todo'}</button>
                
            </form>
          
            <h2>My Todos</h2><div className="status-filter-container">
                <label htmlFor="StatusFilter">Status Filter:</label>
                <select id="StatusFilter" name="StatusFilter" value={task.StatusFilter} onChange={handleChange}  className={`status-select ${task.StatusFilter === 'Completed' ? 'status-completed' : 'status-not-completed'}`}>
                    <option value="All">All</option>
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <MyTodos todos={filteredTodos} updateStatus={updateStatus} editTodo={editTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoTask;
