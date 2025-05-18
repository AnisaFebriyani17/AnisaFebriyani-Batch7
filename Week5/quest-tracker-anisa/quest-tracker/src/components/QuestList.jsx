import React from "react";
import QuestItem from "./QuestItem";
import "../assets/css/QuestList.css";

export default function QuestList(props) {
  if (props.quests.length === 0) {
    return (
      <p className="empty-msg">
        Belum ada quest. Tambahkan petualangan baru untuk memulai!
      </p>
    );
  }

  const renderedQuests = props.quests.map(function (q) {
    return (
      <QuestItem
        key={q.id}
        quest={q}
        onComplete={props.onComplete}
        onDelete={props.onDelete}
      />
    );
  });

  return <div className="list-container">{renderedQuests}</div>;
}
