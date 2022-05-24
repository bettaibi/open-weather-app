import React from 'react';
import { SearchProps } from '../../models/app.model';
import TextField from '../../styled/TextField/TextField.styled';

const Search: React.FC<SearchProps> = ({text, setText}) => {
    let value = text;
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        value = e.target.value;
    }

    /** prevent unnecessary rendering, Search will be performed only when tapping the Enter button */
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            setText(value);
        }
    }

    return (
        <TextField
            fullWidth
            variant="rounded"
            type="search"
            placeholder="Search for a city"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    )
}

export default React.memo(Search);