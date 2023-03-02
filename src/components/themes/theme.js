import { FaGifts, FaHome } from "react-icons/fa";
import { GiAsianLantern } from "react-icons/gi";
import SpotifyDefault from "../photo/theme/spotify/default.png";
import chritstmasBck from "../photo/theme/christmas/christmas_bg.png";
import lunarBck from "../photo/theme/lunar/lunar_bg.png";
import SpotifyChristmas from "../photo/theme/spotify/christmas.png";
import SpotifyLunar from "../photo/theme/spotify/lunar.png";

let themeList = [
  {
    id: 1,
    start: null,
    end: null,
    name: "default",
    icon: <FaHome />,
    emoj: "💓",
    bckgr: { size: 3, Patnum: "55", preset: "links", random: false },
    bckgrImg: null,
    spotify: SpotifyDefault,
    msg: null,
  },
  {
    id: 2,

    start: new Date(
      `december 1, ${new Date().getUTCFullYear()} 00:00:00`
    ).getTime(),
    end: new Date(
      `december 26, ${new Date().getUTCFullYear()} 00:00:00`
    ).getTime(),
    event: [
      new Date(
        `december 25, ${new Date().getUTCFullYear()} 00:00:00`
      ).getTime(),
    ],
    name: "christmas",
    icon: <FaGifts />,
    emoj: "🎄",
    bckgr: { size: 10, Patnum: "180", preset: "snow", random: true },
    bckgrImg: chritstmasBck,
    spotify: SpotifyChristmas,
    msg: "Merry Christmas 🎄",
  },
  {
    id: 3,
    start: "",
    end: "",
    event: "",
    name: "lunar",
    icon: <GiAsianLantern />,
    emoj: "🧨",
    bckgr: { size: 7, Patnum: "50", preset: "blossomFallV1", random: true },
    bckgrImg: lunarBck,
    spotify: SpotifyLunar,
    msg: "Happy Lunar New Year 🧨",
  },
];

export { themeList };
