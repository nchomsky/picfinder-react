import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //anytime you use the function keyword it will lead to a broken value of 'this'
    // onFormSubmit(event) essentially equals onFormSubmit: function(event) ... that is why it breaks the code
    /*
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term);
    }
    */

    //use an arrow function instead:
    onFormSubmit = (event) => {
        // Prevent default behavior which would cause the page to refresh
        event.preventDefault();

        //look at props object and call the function that we passed into this thing as the onSubmit prop 
        // and invoke that function with this.state.term
        this.props.onSubmit(this.state.term);
    }
    //another method to solving this issue is to pass an arrow function directly into our props
    //similar to what we did with the onChange props

    render() {
        return (
            <div className="ui segment">
                {/* When user submits the form we will run onFormSubmit */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* onChange is called automatically when a user changes text in an input. 
                        do NOT invoke the callback function in this prop */}
                        {/* refactored from uncontrolled to controlled element */}
                        <input type='text' value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;