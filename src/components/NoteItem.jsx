import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
            <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;