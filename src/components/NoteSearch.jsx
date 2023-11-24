import React from "react";

function NoteSearch({ onSearch, search }) {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari catatan ..." value={search} onChange={onSearch}/>
        </div>
    )
}

export default NoteSearch;