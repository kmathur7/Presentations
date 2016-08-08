import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { term: ''};
    }
    
    render() {
        return (
            <div>
                <input placeholder="Enter First Name" onChange={this.onInputChange} />
                Value of the input: {this.state.term}
            </div>
        );
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }
}

export default SearchBar;