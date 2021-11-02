import { combineReducers} from "redux";

const songsReducer = () => {
    return [
        {name: "Leanne Graham", username: "Bret"},
        {name: "Merphy", username: "bill"},
        {name: "Linda", username: "john"},
        {name: "Dobby", username: "bob"}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})