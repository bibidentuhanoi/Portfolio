import { useState, useEffect, useRef } from "react";
import { themeList } from "../themes/theme";
import useDetectClickOut from "../../hooks/useDetectClickOut";
import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
import ChristmasModal from "./christmasModal/christmasModal";
import LunarModal from "./lunarModal/lunarModal";
export default function Modal({ setModal, themes }) {
  const [time, setTime] = useState({
    days: "12",
    hours: "12",
    minutes: "12",
    seconds: "12",
  });
  const Event = themeList.find((item) => item.name === themes).event;
  let endDate = Event[0];
  if (
    new Date(endDate).getDate() < new Date().getDate() &&
    new Date(endDate).getMonth() < new Date().getMonth()
  ) {
    endDate = endDate + 31556952000;
  }
  useEffect(() => {
    const count = setInterval(() => {
      const today = new Date().getTime();
      const timeDiff = endDate - today;
      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;
      const IsToday = Event.findIndex(
        (E) =>
          new Date(E).getMonth() === new Date().getMonth() &&
          new Date(E).getDate() === new Date().getDate() &&
          new Date(E).getHours() <= new Date().getHours() &&
          new Date(E).getMinutes() <= new Date().getMinutes()
      );
      if (IsToday >= 0) {
        if (themes === "lunar")
          setTime({
            date: IsToday + 1,
            event: true,
          });
        else
          setTime({
            event: true,
          });
        return;
      } else {
        setTime({
          days: Math.floor(timeDiff / days),
          hours: Math.floor((timeDiff % days) / hours),
          minutes: Math.floor((timeDiff % hours) / minutes),
          seconds: Math.floor((timeDiff % minutes) / seconds),
          event: false,
        });
      }
    }, 1000);
    return () => clearInterval(count);
  }, [endDate, Event, themes]);

  const ModalList = [
    {
      id: 1,
      name: "default",
      modal: null,
    },
    {
      id: 2,
      name: "christmas",
      modal: <ChristmasModal time={time} />,
    },
    {
      id: 3,
      name: "lunar",
      modal: <LunarModal time={time} />,
    },
  ];
  const ref = useRef(null);
  useDetectClickOut(ref, () => setModal(false));
  return (
    <div className="container">
      <div className="modal-container">
        <div className="modal" ref={ref}>
          <button onClick={() => setModal(false)}>
            <AiOutlineClose />
          </button>
          <div className="modal-content">
            {ModalList.find((item) => item.name === themes).modal}
          </div>
        </div>
      </div>
    </div>
  );
}
