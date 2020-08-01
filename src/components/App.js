import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    //an empty array of images is instantiated
    state = { images: [] };

    //async await syntax (async goes in front of method name, you find what is taking time to be resolved and put await in front of it):
    onSearchSubmit = async (term) => {
        //axios returns a promise
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;