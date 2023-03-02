import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { themeList } from "../components/themes/theme";

export default function useFetchSpotify(themes) {
  const socketRef = useRef(null);
  if (socketRef.current == null) {
    socketRef.current = io("https://nodejsportfolio.onrender.com");
  }

  const [Tracks, setTracks] = useState({
    Name: "Nothing is playing right now",
    Artist: null,
    trackUrl: null,
    Cover: themeList.find((theme) => theme.name === themes).spotify,
  });

  useEffect(() => {
    const { current: socket } = socketRef;
    socket.on("connect", () => {});
    socket.on("disconnect", () => {});
    socket.on("spotify", (res) => {
      if (res.State === "track") {
        setTracks(res);
      }
      if (res.State === "none") {
        setTracks({ ...Tracks });
      }
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("spotify");
    };
  }, []);
  return Tracks;
}
