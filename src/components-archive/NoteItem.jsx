import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, date, archived, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} date={date} />
            <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;