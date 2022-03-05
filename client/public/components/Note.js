import "../styles/note.scss";
import { useState } from "react";

export default function Note(props) {
  const { addNote, deleteNote, moveNote, note } = props;

  const [collapsed, setCollapsed] = useState(note.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        let newNote = {
          id: note.id,
          description: event.target.elements.description.value,
          status: note.status,
          isCollapsed: true,
        };

        addNote(newNote);
        setCollapsed(true);
      }
    }

    if (formAction === "delete") {
      deleteNote(note.id);
    }
  }

  function handleMoveLeft() {
    let newStatus = "";

    if (note.status === "To improve") {
      newStatus = "Went well";
    } else if (note.status === "Action items") {
      newStatus = "To improve";
    }

    if (newStatus !== "") {
      moveNote(note.id, newStatus);
    }
  }

  function handleMoveRight() {
    let newStatus = "";

    if (note.status === "Went well") {
      newStatus = "To improve";
    } else if (note.status === "To improve") {
      newStatus = "Action items";
    }

    if (newStatus !== "") {
      moveNote(note.id, newStatus);
    }
  }

  return (
    <div className={`note ${collapsed ? "collapsedNote" : ""}`}>
      <button onClick={handleMoveLeft} className="button moveNote">
        &#171;
      </button>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <textarea
          rows="2"
          className="description input"
          name="description"
          placeholder="Start typing.."
          defaultValue={note.description}
        />
        <button
          onClick={() => {
            setFormAction("save");
          }}
          className="button"
        >
          {collapsed ? "Edit" : "Save"}
        </button>
        {collapsed && (
          <button
            onClick={() => {
              setFormAction("delete");
            }}
            className="button delete"
          >
            X
          </button>
        )}
      </form>
      <button onClick={handleMoveRight} className="button moveNote">
        &#187;
      </button>
    </div>
  );
}