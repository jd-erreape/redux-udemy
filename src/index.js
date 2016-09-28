import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDEX4y7GRRULIhytyroY05aoGdbbl4W2Ic';

// Create the component which produce some HTML
class App extends Component{
  constructor (props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'foyone'}, (videos) => {
      this.setState({videos});
    });
  };

  render () {
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };
};

//Take the HTML of the component and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
