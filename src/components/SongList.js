import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="container" key={song.name}>
                    <div className="leftSide">{song.name}</div>
                    <div className="rightSide">
                        <button type="button" className="btn" onClick={() => this.props.selectSong(song)}>Selected</button>
                    </div>
                </div>
            );
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                    {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {songs: state.songs}
}

export default connect(mapStateToProps, { selectSong })(SongList);