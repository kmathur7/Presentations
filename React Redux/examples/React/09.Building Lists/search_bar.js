import React, {Component} from 'react';

import ResultList from './result_list';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);


        this.state = { term: '' , results: []};
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onClick(event){
        this.setState({
            results: [
                {
                    id: 1,
                    name: 'Kunal Mathur',
                    location: 'Bangalore'
                },
                {   id: 2,
                    name: 'Lochan Swarup',
                    location: 'Pune'
                },
                {   id: 3,
                    name: 'Sandarsh Nigam',
                    location: 'Mumbai'
                }                
            ]
        });
    }

    render() {
        return (
            <div>
                <input placeholder="Enter First Name" onChange={this.onInputChange} value={this.state.term} />
                <button onClick={this.onClick}>Search</button>
                <ResultList results={this.state.results} />
            </div>
        );
    }


}

export default SearchBar;