"use client";
import { Button } from "antd";
import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

const Audio = () => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className={styles["audio-sticky"]}>
      <Button
        className="p-0"
        type="text"
        onClick={() => {
          if (play) {
            audioRef.current?.pause();
            setPlay(false);
          } else {
            audioRef.current?.play();
            setPlay(true);
          }
        }}
      >
        {play ? (
          <PauseCircleOutlined style={{ fontSize: 32, color: "#eba7ce" }} />
        ) : (
          <PlayCircleOutlined style={{ fontSize: 32, color: "#eba7ce" }} />
        )}
      </Button>
      <audio
        id="audio"
        controls
        autoPlay
        loop
        style={{ display: "none" }}
        ref={audioRef}
      >
        <source src="piano.mp3" type="audio/mpeg" />
        Your browser does not support the html audio tag.
      </audio>
    </div>
  );
};

export default Audio;
