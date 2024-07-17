import { useState } from "react";

export default function Taskinput({ onaddTask }) {
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  function taskAdd(e) {
    e.preventDefault();

    if (!description) return;

    const newtask = {
      id: Date.now(),
      description,
      completed: completed,
    };
    onaddTask(newtask);

    setCompleted(false);
    setDescription("");
  }
  const handleClick = () => setCompleted(!completed);
  return (
    <div className="task_input">
      <form onSubmit={taskAdd}>
        <input
          type="text"
          placeholder="New Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Ajouter</button>
        completed
        <input
          type="checkbox"
          onClick={handleClick}
          onChange={handleClick}
          checked={completed}
        />
      </form>
    </div>
  );
}
