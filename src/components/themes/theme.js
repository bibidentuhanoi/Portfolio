import { CalendarVietnamese } from "date-chinese";
import { FaGifts, FaHome } from "react-icons/fa";
import { GiAsianLantern } from "react-icons/gi";
import SpotifyDefault from "../photo/theme/spotify/default.png";
import chritstmasBck from "../photo/theme/christmas/christmas_bg.png";
import lunarBck from "../photo/theme/lunar/lunar_bg.png";
import SpotifyChristmas from "../photo/theme/spotify/christmas.png";
import SpotifyLunar from "../photo/theme/spotify/lunar.png";

let cal = new CalendarVietnamese();
let newYear = cal.newYear(new Date().getUTCFullYear());
cal.fromJDE(newYear);
export const themeList = [
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
      `December 1, ${new Date().getUTCFullYear()} 00:00:00`
    ).getTime(),
    end: new Date(
      `December 26, ${new Date().getUTCFullYear()} 00:00:00`
    ).getTime(),
    event: new Date(
      `December 25, ${new Date().getUTCFullYear()} 00:00:00`
    ).getTime(),
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
    start: new Date(cal.toDate().toISOString()).getTime() - 1036800000,
    end: new Date(cal.toDate().toISOString()).getTime() + 432000000,
    event: new Date(cal.toDate().toISOString()).getTime(),
    name: "lunar",
    icon: <GiAsianLantern />,
    emoj: "🧨",
    bckgr: { size: 7, Patnum: "80", preset: "blossomFallV1", random: true },
    bckgrImg: lunarBck,
    spotify: SpotifyLunar,
    msg: "Happy Lunar New Year 🧨",
  },
];
