import "./styles.css";
import { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { InsertEmoticon } from "@material-ui/icons";

export default function App() {
  const [note, setNotes] = useState([
    { name: "this is new note 1", body: "note 1", id: 1 },
    { name: "this is new note 2", body: "note 2", id: 2 },
    { name: "this is new note 3", body: "note 3", id: 3 }
  ]);

  const [tempnote, setTempnote] = useState([
    {
      name: "",
      body: "",
      id: 0
    }
  ]);

  const onButtonclick = (event) => {
    const clickedid = event.target.id;
    console.log(clickedid);
    const newnote = note.filter((item) => {
      console.log("notes id:" + item.id);
      return item.id != clickedid;
    });

    setNotes([...newnote]);
    console.log(newnote);
  };

  function handlechange(event) {
    const newbody = event.target.value;
    const newname = event.target.name + note.length + 1;
    const newid = note.length + 1;

    const newnote = [
      {
        name: newname,
        body: newbody,
        id: newid
      }
    ];

    setTempnote([...newnote]);
  }

  function handlesubmit(event) {
    alert(`the submission sucessful!`);
    setNotes((prevnote) => {
      return [...prevnote, ...tempnote];
    });
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="this is new note "
          value={tempnote.body}
          placeholder="type here"
          onChange={handlechange}
        />
        <input type="submit" />
      </form>
      <p>
        {" "}
        {note.map((item, index) => {
          return (
            <p>
              {item.body + " and ID is " + item.id}{" "}
              <button id={item.id} onClick={onButtonclick}>
                {" "}
                <DeleteIcon tname="hihi" />
              </button>
            </p>
          );
        })}
      </p>
    </div>
  );
}
