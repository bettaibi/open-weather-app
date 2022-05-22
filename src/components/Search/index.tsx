import { useState } from 'react';
import TextField from '../../styled/TextField/TextField.styled';

const Search = () => {
    const [text, setText] = useState<string>('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setText(value)
    }

    return (
        <TextField
            fullWidth
            variant="rounded"
            type="search"
            placeholder="Search for a city"
            value={text}
            onChange={handleChange}
        />
    )
}

export default Search;