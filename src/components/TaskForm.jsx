import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (evt) => {
    evt.preventDefault();

    createTask({
      title,
      descripcion,
    });
    setTitle("")
    setDescripcion("")
  };

  return (
   <div className="max-w-md mx-auto">
     <form onSubmit={handleSubmit} className="bg-blue-400 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Ingresa nueva tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(evt) => {
          setTitle(evt.target.value);
        }}
        className="bg-salte 300 p-3 w-full mb-2"
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe descripción de tarea"
        onChange={(evt) => setDescripcion(evt.target.value)}
        className="bg-salte 300 p-3 w-full mb-2"
        value = {descripcion}
      ></textarea>
      <button className="bg-red-600 px-2 py-1 text-white rounded-md mt-2 hover:bg-green-500">Guardar</button>
    </form>
   </div>
  );
}

export default TaskForm;
