import React, { useState } from "react";
import "../assets/css/QuestForm.css";

export default function QuestForm(props) {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function submit() {
    if (title.trim().length > 0) {
      props.onAdd(title);
      setTitle("");
    }
  }

  function resetAll() {
    props.onReset();
  }

  return (
    <div className="form-container">
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Masukkan nama quest"
      />
      <button onClick={submit}>Tambah</button>
      <button onClick={resetAll} className="reset">
        Hapus
      </button>
    </div>
  );
}
