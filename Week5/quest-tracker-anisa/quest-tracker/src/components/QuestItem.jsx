import React from "react";
import "../assets/css/QuestItem.css";

export default function QuestItem(props) {
  const id = props.quest.id;
  const title = props.quest.title;
  const completed = props.quest.completed;

  const className = completed ? "quest-item completed" : "quest-item";

  function completeThis() {
    props.onComplete(id);
  }

  function deleteThis() {
    props.onDelete(id);
  }

  return (
    <div className={className}>
      <span>{title}</span>
      <div className="actions">
        {!completed && <button onClick={completeThis}>Selesai</button>}
        <button onClick={deleteThis}>Hapus</button>
      </div>
    </div>
  );
}
