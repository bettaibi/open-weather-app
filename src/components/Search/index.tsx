import React from 'react';
import { updateCity } from '../../store/city/citySlice';
import { useAppDispatch } from '../../store/hooks';
import TextField from '../../styled/TextField/TextField.styled';

const Search = ({text}: {text: string}) => {
    /**
     * We use In memory "value" rather than useState hook (to trigger input value changes),
     * to prevent unnecessary rendering, since the search will be performed only when pressing the Enter Button.
     */ 
    let value = text;
    const dispatch = useAppDispatch();
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        value = e.target.value;
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            dispatch(updateCity(value.toLowerCase()));
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