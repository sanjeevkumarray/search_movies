import React, { useState } from "react";

function Playlist(){
  const [publicPlaylist, setPublicPlaylist] = useState([]);
  const [privatePlaylist, setPrivatePlaylist] = useState([]);
  const [newMovie, setNewMovie] = useState("");
  const addToPublicPlaylist = () => {
    setPublicPlaylist([...publicPlaylist, newMovie]);
    setNewMovie("");
  };

  const addToPrivatePlaylist = () => {
    setPrivatePlaylist([...privatePlaylist, newMovie]);
    setNewMovie("");
  };

  return (
    <div>
      <h3>Public Playlist</h3>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Add a movie..."
      />
      <button onClick={addToPublicPlaylist}>Add to Public Playlist</button>
      <ul>
        {publicPlaylist.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
      <h3>Private Playlist</h3>
      <button onClick={addToPrivatePlaylist}>Add to Private Playlist</button>
      <ul>
        {privatePlaylist.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
