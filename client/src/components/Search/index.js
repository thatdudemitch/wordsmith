import React, { useState } from 'react';
import { StyledSearch } from './styles';
import { useRouter } from '../../hooks/useRouter';

const Search = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    function handleOnSubmit(e) {
        e.preventDefault();
        router.history.push({
            pathname: `/songs/${search}`,
            state: search 
        });
        setSearch('');
    }

    return (
        <StyledSearch onSubmit={(e) => handleOnSubmit(e, search)}>
            <input 
                type="text" 
                name="search" 
                value={search} 
                placeholder="Search for song" 
                onChange={(e) => setSearch(e.target.value)}
            />
            <button></button>
        </StyledSearch>
    )
}

export default Search;