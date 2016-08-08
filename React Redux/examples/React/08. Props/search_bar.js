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
                <label>{this.props.label} 
                    <input placeholder="Enter First Name" onChange={this.onInputChange} value={this.state.term} />
                </label>
            </div>
        );
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }
}

export default SearchBar;