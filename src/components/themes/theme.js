import { CalendarVietnamese } from "date-chinese";
import { julian } from "astronomia";
import { FaGifts, FaHome } from "react-icons/fa";
import { GiAsianLantern } from "react-icons/gi";
import SpotifyDefault from "../photo/theme/spotify/default.png";
import chritstmasBck from "../photo/theme/christmas/christmas_bg.png";
import lunarBck from "../photo/theme/lunar/lunar_bg.png";
import SpotifyChristmas from "../photo/theme/spotify/christmas.png";
import SpotifyLunar from "../photo/theme/spotify/lunar.png";

let cal = new CalendarVietnamese();
let GetnewYear = cal.newYear(new Date().getUTCFullYear());
let LunarNewyear = new Date(
  new julian.CalendarGregorian().fromJDE(GetnewYear).toDate()
).getTime();
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
    event: [
      new Date(
        `December 25, ${new Date().getUTCFullYear()} 00:00:00`
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
    start: LunarNewyear - 1036800000,
    end: LunarNewyear + 518400000,
    event: [
      LunarNewyear,
      LunarNewyear + 86400000,
      LunarNewyear + 172800000,
      LunarNewyear + 259200000,
      LunarNewyear + 345600000,
      LunarNewyear + 432000000,
    ],
    name: "lunar",
    icon: <GiAsianLantern />,
    emoj: "🧨",
    bckgr: { size: 7, Patnum: "60", preset: "blossomFallV1", random: true },
    bckgrImg: lunarBck,
    spotify: SpotifyLunar,
    msg: "Happy Lunar New Year 🧨",
  },
];
