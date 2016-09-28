import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDEX4y7GRRULIhytyroY05aoGdbbl4W2Ic';

YTSearch({
  key: API_KEY,
  term: 'foyone',
}, function (data) {
  console.log(data);
});

// Create the component which produce some HTML
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
};

//Take the HTML of the component and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
