import { useState } from "react";
//import Taksitem from "./TaskItem";

export default function Tasklist({ tasksItem, ondeleteTask, delAll }) {
  const [sortBy, setSortBy] = useState("all");
  let sortedItems;

  if (sortBy === "all") sortedItems = tasksItem;
  if (sortBy === "by complete")
    sortedItems = tasksItem.slice().sort((a, b) => b.completed - a.completed);
  if (sortBy === "by uncomplete")
    sortedItems = tasksItem.slice().sort((a, b) => a.completed - b.completed);
  if (sortBy === "by alphabet")
    sortedItems = tasksItem
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  return (
    <div className="task_list">
      <h1> Tasklist</h1>
      <span> Filter tasklist</span>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="all" key={0}>
          By All
        </option>
        <option value="by complete" key={1}>
          By Complete
        </option>
        <option value="by uncomplete" key={2}>
          By UnComplete
        </option>
        <option value="by alphabet" key={3}>
          By Alphabet
        </option>
      </select>
      <div className="task">
        {sortedItems.map((item) => (
          <div className="elt">
            <Taksitem item={item} del={ondeleteTask} key={item.id} />
          </div>
        ))}
      </div>
      <div className="manage_task">
        <button onClick={() => delAll()}>Delete</button>
      </div>
    </div>
  );
}

function Taksitem({ item, del }) {
  return (
    <div key={item.id}>
      <span>{item.description}</span>
      <span>{item.completed ? "✔️" : "❌"}</span>

      <button onClick={() => del(item.id)}> del </button>
    </div>
  );
}
