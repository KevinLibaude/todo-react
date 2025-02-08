import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTaskObject = { id: tasks.length + 1, name: newTask, completed: false };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const handleToggleCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newTaskName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: newTaskName };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} /> <button type="submit">Ajouter</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleToggleCompleted(task.id)} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span> 
            <button onClick={() => handleEditTask(task.id, prompt('Nouveau nom de la tâche :'))}>Modifier</button>
            <button onClick={() => handleDeleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;