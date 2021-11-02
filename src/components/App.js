import React from 'react';
import SongList from "./SongList";
import SongDetails from "./SongDetails";

const App = () => {
    return (
        <div className="main">
            <div>
                <SongList />
            </div>
           <div>
               <SongDetails />
           </div>
        </div>
    );
};

export default App;