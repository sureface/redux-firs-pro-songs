import React from 'react';
import {connect} from "react-redux";


const SongDetails = ({ song }) => {

    if (!song){
        return <h1>Please select some songs for listen</h1>
    }

    return (
        <div>
            <h1>Name: {song.name}</h1>
            <h1>User Name: {song.username}</h1>
        </div>
    );
};

const mapStateToProps = (stste) => {
    return {song: stste.selectedSong}
}

export default connect(mapStateToProps,null)( SongDetails);