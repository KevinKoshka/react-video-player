import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        //Cada componente en el arreglo necesita una key individual, que puede ser cualquier cosa.
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        );
    });

    return (
        //React va a desglosar el array en JSX.
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;