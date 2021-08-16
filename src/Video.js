import React, { useRef, useState } from "react";

import VideoFooter from "./videoFooter";
import VideoSidebar from "./VideoSidebar";
import "./video.css";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <iframe
        onClick={handleVideoPress}
        ref={videoRef}
        style={{ height: "100vh", width: "100vw;" }}
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      {/* video footer */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* video sidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
