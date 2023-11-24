import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
    if ({archived}) {
        return <button className="note-item__archive" onClick={() => onArchive(id)}>Pindahkan</button>;
    }
    else {
        return <button className="note-item__archive" onClick={() => onArchive(id)}>Arsipkan</button>;
    }
        
}

export default ArchiveButton;