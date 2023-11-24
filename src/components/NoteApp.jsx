import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteHeader from "./NoteHeader";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searched: "",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        this.setState((prevState)=>{
            return {
              prevState : prevState.notes.map(note => 
                note.id === id ? (note.archived = !note.archived) : note
              )
            }
        })
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearchHandler(event) {
        this.setState({ 
            searched: event.target.value,
        })
    }

    searchNote() {
        const { notes, searched } = this.state;
        return notes.filter((note) => note.title.toLowerCase().includes(searched.toLowerCase()));
    }

    render() {
        const archived_notes = this.searchNote().filter(note => note.archived !== true);
        const unarchived_notes = this.searchNote().filter(note => note.archived !== false);

        return (
            <div className="note-app">
                <NoteHeader search={this.state.searched} onSearch={this.onSearchHandler}/>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={archived_notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Arsip</h2>
                    <NoteList notes={unarchived_notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        )
    }
}

export default NoteApp;