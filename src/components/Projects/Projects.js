import { useRef } from "react";
import { BsCaretRight } from "react-icons/bs";

import "./Projects.css";
import Logo from "../logo/logo";
import { themeList } from "../themes/theme";
import useVisible from "../../hooks/useVisible";
import useFetchProjects from "../../hooks/useFetchProjects";
const Projects = ({ themes }) => {
  const ref = useRef();
  const onVisible = useVisible(ref);
  const [loading, Projects] = useFetchProjects();
  return (
    <div className="container" id="projects">
      <div
        className="projects-container"
        ref={ref}
        style={{ opacity: onVisible ? "1" : "0" }}
      >
        <div className="projects">
          <h2 id="title">
            <span>03.</span>&nbsp;Projects:
          </h2>
          {loading ? (
            <div className="projectLoad">
              <h2>Loading...</h2>
            </div>
          ) : (
            <div className="my-project">
              {Projects.length === 0 ? (
                <div className="noProject">
                  <h2>Projects will be updated soon</h2>
                  <h2>{themeList.find((item) => item.name === themes).msg}</h2>
                </div>
              ) : (
                <section>
                  <div className="ProjectsTitle">
                    <div className="line"></div>
                    <h2>Project HighLights</h2>
                    <div className="line"></div>
                  </div>

                  <section>
                    <div className="projectsHighlight">
                      {Projects.map((item, index) => {
                        const { name, tag, des, image } = item;
                        return (
                          <div className="projectHL" key={index}>
                            <div
                              className="projectHLBg"
                              style={{
                                background: `linear-gradient(rgba(var(--backgrColorLight), 1),rgba(var(--backgrColorLight), 0.8),rgba(var(--backgrColorLight), 0.6)),
                          url(${image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            ></div>
                            <div className="projectHLDetail">
                              <div className="projectBrand">
                                {/* <img src={logo} alt="Logo" /> */}
                                <Logo logoWidth={"16%"} />
                              </div>
                              <h3>{name}</h3>
                              <div className="projectHLDes">
                                <p>{des}</p>
                              </div>
                              <ul className="projectHLTag">
                                {tag.split(",").map((item) => {
                                  return (
                                    <li>
                                      <BsCaretRight className="icon projectHLTagIcon" />
                                      {item.trim()}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Projects;
