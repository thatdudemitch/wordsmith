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
        box-shadow: 0 3px 15px rgba(103, 103, 103, 0.35);
        padding: 18px;
        height: 50px;
        &::placeholder {
            color: #ccc;
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
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnSubmit(e) {
        e.preventDefault();
        const searchQuery = {
            search: this.state.search
        }
        if(this.props.location.pathname !== "/songs") {
            return this.props.history.push({
                pathname: '/songs',
                state: searchQuery
            });
        }
        this.props.history.push({ state: searchQuery });
        // this.setState(() => ({ search: ''}));
    }
    handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => ({ [name]: value }));
      }
    render() {
        return (
            <StyledSearch onSubmit={this.handleOnSubmit}>
                <input type="text" name="search" value={this.state.search} placeholder="Search for song" onChange={this.handleOnChange}/>
                <button>S</button>
            </StyledSearch>
        )
    }
}

export default Search;