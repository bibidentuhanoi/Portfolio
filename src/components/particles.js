import { useEffect, useState } from "react";
import { themeList } from "./themes/theme";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { loadSnowPreset } from "tsparticles-preset-snow";
import { loadBlossomFallingV1 } from "tsparticles-preset-blossom-ver1";

const particlesInit = (tsParticles) => {
  loadSnowPreset(tsParticles);
  loadLinksPreset(tsParticles);
  loadBlossomFallingV1(tsParticles);
};
let ParticlesBackGround = ({ width, blur, themes }) => {
  const [ParticleOP, setPat] = useState({
    Num: themeList.find((item) => themes === item.name).bckgr.Patnum,
    Area: "300",
  });
  useEffect(() => {
    if (width <= 800)
      setPat({
        Num: "17",
        Area: "400",
      });
    else
      setPat({
        Num: themeList.find((item) => themes === item.name).bckgr.Patnum,
        Area: "800",
      });
  }, [width, themes]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        bottom: 0,
        zIndex: -1,
        filter: blur ? "blur(0.2rem)" : "",
      }}
    >
      <Particles
        options={{
          background: {
            color: {
              value: "",
            },
            fpsLimit: 50,
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onClick: {
                enable: false,
              },
            },
            onHover: {
              enable: false,
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
          },
          particles: {
            number: {
              value: ParticleOP.Num,
              density: {
                enable: false,
                area: ParticleOP.Area,
              },
            },
            size: {
              random: {
                enable: themeList.find((item) => themes === item.name).bckgr
                  .random,
                minimumValue: 2,
              },
              value: themeList.find((item) => themes === item.name).bckgr.size,
            },
            destroy: {
              split: {
                count: 2,
                factor: {
                  random: {
                    enable: true,
                    minimumValue: 1,
                  },
                  value: 5,
                },
                sizeOffset: true,
              },
            },
            link: {
              distance: "120",
            },
          },
          preset: themeList.find((item) => themes === item.name).bckgr.preset,
        }}
        init={particlesInit}
      />
    </div>
  );
};
export default ParticlesBackGround;
