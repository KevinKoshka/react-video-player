import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

//API key de Youtube
const API_KEY = 'AIzaSyD82vEw5UArh0mObpk4uYhyP879Kukdn5w';

//Componente container
class App extends Component{

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos : data });
    });
  }

  render() {
    return (
      //JSX

      //VideoList recibe el valor en videos de la mano de props.
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}  />
      </div>
    );
  }

}

ReactDOM.render(
  <App/>
  , document.querySelector('.container'));
