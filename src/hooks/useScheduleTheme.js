import { useEffect } from "react";
import { themeList } from "../components/themes/theme";
export default function useScheduleTheme(setTheme) {
  useEffect(() => {
    const today = new Date().getTime();
    themeList.filter((item) => {
      if (item.start === today || (item.start < today && today < item.end)) {
        setTheme((prev) => ({ prevTheme: prev.name, name: item.name }));
        return true;
      }
      if (item.end <= today) {
        setTheme({ prevTheme: null, name: "default" });
        return true;
      } else return false;
    });
  }, [setTheme]);
}
