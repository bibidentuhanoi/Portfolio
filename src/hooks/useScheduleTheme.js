import { useEffect } from "react";
import { themeList } from "../components/themes/theme";
import { CalendarVietnamese } from "date-chinese";
import { julian } from "astronomia";

export default function useScheduleTheme(setTheme) {
  useEffect(() => {
    const today = new Date().getTime();
    let LunarNewYear = new Date(
      new julian.CalendarGregorian()
        .fromJDE(new CalendarVietnamese().newYear(new Date().getUTCFullYear()))
        .toDate()
    ).getTime();
    themeList.filter((theme) => {
      if (typeof theme.event !== "undefined") {
        if (theme.name === "lunar") {
          if (today > LunarNewYear) {
            LunarNewYear = new Date(
              new julian.CalendarGregorian()
                .fromJDE(
                  new CalendarVietnamese().newYear(
                    new Date().getUTCFullYear() + 1
                  )
                )
                .toDate()
            ).getTime();
          }
          theme.start = LunarNewYear - 1036800000;
          theme.end = LunarNewYear + 518400000;
          theme.event = [
            LunarNewYear,
            LunarNewYear + 86400000,
            LunarNewYear + 172800000,
            LunarNewYear + 259200000,
            LunarNewYear + 345600000,
            LunarNewYear + 432000000,
          ];
        } else {
          if (today > theme.event[0]) {
            theme.event[0] = new Date(theme.event[0]).setFullYear(
              new Date().getUTCFullYear() + 1
            );
          }
        }
        if (
          theme.start === today ||
          (theme.start < today && today < theme.end)
        ) {
          setTheme((prev) => ({ prevTheme: prev.name, name: theme.name }));
          return true;
        }
        if (theme.end <= today) {
          setTheme({ prevTheme: null, name: "default" });
          return true;
        } else return false;
      }
      return true;
    });
  }, [setTheme]);
}
