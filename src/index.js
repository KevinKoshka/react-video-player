import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js'

//API key de Youtube
const API_KEY = 'AIzaSyD82vEw5UArh0mObpk4uYhyP879Kukdn5w';

//Componente container
class App extends Component{

  constructor(props) {
    super(props);

    this.state = { 
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      //JSX

      //VideoList recibe el valor en videos de la mano de props.
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }

}

ReactDOM.render(
  <App/>
  , document.querySelector('.container'));
