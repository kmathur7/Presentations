import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input placeholder="Enter First Name" onChange={this.onInputChange} />
            </div>
        );
    }

    onInputChange(event){
        console.log(event.target.value);
    }
}

export default SearchBar;