import React from 'react';

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
        
        this.props.history.push({
            pathname: '/songs',
            state: searchQuery
        });
    }
    handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => ({ [name]: value }));
      }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" name="search" value={this.state.search} onChange={this.handleOnChange}/>
                <button>Search</button>
            </form>
        )
    }
}

export default Search;