import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };



    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '32ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField
                    fullWidth
                    id="outlined-basic"
                    type="text"
                    placeholder="Busca tu personaje favorito"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </Box>
        </div>
    );
};

export default SearchBar;