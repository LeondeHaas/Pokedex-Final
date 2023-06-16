import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            {gotoPrevPage != null && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage != null && <button onClick={gotoNextPage}>Next</button>}
        </div>
    );
}

