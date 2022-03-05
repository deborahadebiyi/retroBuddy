import "../styles/statusLine.scss";
import Note from "./Note";

export default function StatusLine(props) {
  const { status, notes, addNote, deleteNote, addEmptyNote, moveNote } = props;

  let noteList, notesForStatus;

  function handleAddEmpty() {
    addEmptyNote(status);
  }

  if (notes) {
    notesForStatus = notes.filter((note) => {
      return note.status === status;
    });
  }

  if (notesForStatus) {
    noteList = notesForStatus.map((note) => {
      return (
        <Note
          addNote={(note) => addNote(note)}
          deleteNote={(id) => deleteNote(id)}
          moveNote={(id, status) => moveNote(id, status)}
          key={note.id}
          note={note}
        />
      );
    });
  }

  return (
    <div className="statusLine">
      <h3>{status}</h3>
      {noteList}
      <button onClick={handleAddEmpty} className="button addNote">
        +
      </button>
    </div>
  );
}