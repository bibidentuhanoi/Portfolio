import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import wait from "./functions/wait";
import ParticlesBackGround from "./components/particles";
import Loader from "./components/loading/Loader";
import About from "./components/about/about";
import Intro from "./components/intro/intro";
import NavBar from "./components/navBar/Navbar";
import Skills from "./components/skills/skills";
import SideBars from "./components/sideItem/Sidebars";
import Footer from "./components/footer/Footer";
import useDeviceWidth from "./hooks/useDetectWidth";
import useHandleScroll from "./hooks/useHandleScroll";
import Projects from "./components/Projects/Projects";
import Modal from "./components/modal/Modal";
import useSwitchTheme from "./hooks/useSwitchTheme";
import useScheduleTheme from "./hooks/useScheduleTheme";
function App() {
  // Startup Start //
  const [load, setLoad] = useState(true);
  const [blur, setBlur] = useState(false);
  const [showSide, setSide] = useState(false);
  const [Bounce, setBounce] = useState(true);
  const [showMenu, setShow] = useState(true);
  const [showModal, setModal] = useState(true);
  const [scrollPass, setScroll] = useState(true);
  const [themes, setTheme] = useState({ prevTheme: "", name: "default" });
  const width = useDeviceWidth();
  const loader = useCallback(async () => {
    await wait(3500);
    document.querySelector(".loader-container").style.opacity = "0";
    await wait(1000);
    setLoad(false);
    document.querySelector("main").style.opacity = "1";
    return;
  }, []);

  useEffect(() => {
    window.addEventListener("load", loader);
    if (load) {
      loader();
      setShow(false);
      setBlur(false);
      if (themes.name !== "default") setModal(true);
    }
    return () => {
      window.removeEventListener("load", loader);
    };
  }, [load, loader, themes.name]);

  // Startup End //

  // Handle Theme Start//
  useSwitchTheme(themes, setModal, load);
  useScheduleTheme(setTheme);
  // Handle Theme End//

  // Handle Scroll Start//

  useHandleScroll(() => {
    if (window.scrollY < 222 || window.scrollY === 0) {
      setSide(false);
      setBounce(true);
      setScroll(true);
    } else {
      setShow(false);
      setBlur(false);
      setSide(true);
      setBounce(false);
      setScroll(false);
    }
  });
  // Handle Scroll End//

  useEffect(() => {
    if (!load) {
      if (blur) {
        document.querySelector("canvas").style.filter = "blur(5px)";
        document.querySelector("#content").style.opacity = 0.2;
      } else {
        document.querySelector("canvas").style.filter = "blur(0px)";
        document.querySelector("#content").style.opacity = 1;
      }
    }
  }, [load, blur]);
  return load ? (
    <Loader />
  ) : (
    <>
      <main>
        <NavBar
          width={width}
          setBlur={setBlur}
          blur={blur}
          showMenu={showMenu}
          setShow={setShow}
          scrollPass={scrollPass}
          setTheme={setTheme}
          themes={themes}
          setLoad={setLoad}
        />
        <ParticlesBackGround blur={blur} themes={themes.name} width={width} />
        {themes.name !== "default" ? (
          <>
            {" "}
            {showModal ? (
              <>
                <Modal setModal={setModal} themes={themes.name} />
              </>
            ) : null}
          </>
        ) : null}
        <section id="content">
          <Intro Bounce={Bounce} themes={themes.name} />
          <About themes={themes.name} width={width} />
          <Skills width={width} />
          <Projects themes={themes.name} />
          <SideBars showSide={showSide} width={width} />
          <Footer themes={themes.name} />
        </section>
      </main>
    </>
  );
}

export default App;
