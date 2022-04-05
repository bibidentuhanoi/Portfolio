import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import Logo from "../logo/logo";
import Switcher from "../themes/Switcher";
import { navItem } from "./navitem.js";
import { FaCaretDown, FaRecordVinyl, FaUserAlt } from "react-icons/fa";
import useFetchSpotify from "../../hooks/useFetchSpotify";
import useDetectClickOut from "../../hooks/useDetectClickOut";
import useHover from "../../hooks/useHover";
const NavBar = ({
  setBlur,
  blur,
  showMenu,
  setShow,
  scrollPass,
  setTheme,
  themes,
  setLoad,
}) => {
  const [ThemeRef, IsShowTheme] = useHover();
  // Spotify Start //
  const [SpotRef, IsShowSpot] = useHover();
  let Tracks = useFetchSpotify(themes.name);
  // Spotify End //

  //Click Out Start//
  const Menuref = useRef(null);
  useDetectClickOut(Menuref, () => {
    setShow(false);
    setBlur(false);
  });
  //Click Out End//
  return (
    <header
      id="NavBar"
      style={{
        top: !scrollPass ? "-100%" : "0",
      }}
    >
      <nav className="head">
        <div className="Brand">
          {" "}
          <Logo logoWidth={"4em"} />
        </div>
        <button
          className="burger"
          onClick={() => {
            setShow(!showMenu);
            setBlur(!blur);
          }}
        >
          {" "}
          <div className={`${showMenu ? "change" : ""} bur1 `}></div>
          <div className={`${showMenu ? "change" : ""} bur2 `}></div>
          <div className={`${showMenu ? "change" : ""} bur3 `}></div>
        </button>
        <div className="navItem" id={showMenu ? "" : "HideMenu"}>
          <ul>
            {navItem.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <Link smooth to={`#${url}`}>
                    <span>{id}.</span> {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="themesSwitcher" ref={ThemeRef}>
            <span id="navItemHeader">
              Themes&nbsp;
              <FaCaretDown />{" "}
            </span>
            <div className="switch" id={IsShowTheme ? "" : "HideNavItem"}>
              <Switcher setTheme={setTheme} themes={themes} setLoad={setLoad} />
            </div>
          </div>
          <div className="player" ref={SpotRef}>
            <a
              id="navItemHeader"
              href={Tracks.trackUrl}
              target="_blank"
              without
              rel="noreferrer"
            >
              Now Playing&nbsp;
              <FaCaretDown />{" "}
            </a>
            <div className="spotify" id={IsShowSpot ? "" : "HideNavItem"}>
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${Tracks.Cover})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <a href={Tracks.trackUrl}>
                <div className="trackInfo">
                  <div className="title">
                    <h1>{Tracks.Name}</h1>
                  </div>
                  <div className="metadata">
                    <p id="album">
                      <FaRecordVinyl className="icon" />
                      <span>{Tracks.Album}</span>
                    </p>
                    <p id="artis">
                      <FaUserAlt className="icon" />
                      <span id="scorll">{Tracks.Artist}</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
