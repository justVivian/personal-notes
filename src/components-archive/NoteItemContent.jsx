import React from "react";

function NoteItemContent({ title, body, date }) {
    return (
        <div className="note-item__content">
            <p className="note-item__title">{title}</p>
            <p className="note-item__date">{date}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemContent;