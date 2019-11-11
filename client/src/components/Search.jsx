import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.form`
    position: relative;
    width: 300px;
    margin: 22px 0;
    input[type="text"] {
        border-radius: 6px;
        border: none;
        outline: none;
        width: 100%;
        font-size: 1.75rem;
        padding: 18px;
        height: 50px;
        background: #f2f2f2;
        &::placeholder {
            color: #aaa;
        }
    }
    button {
        background: #3A49E0;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: 6px;
        font-size: 1.5rem;
        border-radius: 5px;
        padding: 12px 20px;
        border: none;
        outline: none;
    }
    @media(min-width:768px) {
        width: 400px;
    }
`;
class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { search: '' }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => ({ [name]: value }));
    }
    render() {
        return (
            <StyledSearch onSubmit={(e) => this.props.handleSearchSubmit(e, this.state.search, this.props)}>
                <input type="text" name="search" value={this.state.search} placeholder="Search for song" onChange={this.handleOnChange}/>
                <button>Search</button>
            </StyledSearch>
        )
    }
}

export default Search;