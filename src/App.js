import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="App">
      {/* App container */}
      <div className="app__videos">
        {videos.map((item, index) => {
          return (
            <Video
              key={index}
              url={item.url}
              channel={item.channel}
              description={item.description}
              song={item.song}
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
