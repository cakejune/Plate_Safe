import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

function Search({ search, setSearch }) {

    return (
        <div className="searchbar">
            <TextField
                id="outlined-search"
                sx={{ background: "transparent" }}
                label={<SearchIcon />}
                placeholder="Search by Restaurant"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;