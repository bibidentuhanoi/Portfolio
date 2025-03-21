import { useRef, useState } from "react";
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
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

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
                <div className="projectsHighlight">
                  {Projects.map((item, index) => {
                    const { id = index, name, description, image, url, tag = "" } = item;
                    const isExpanded = expandedId === id;

                    return (
                      <div
                        className={`projectHL ${isExpanded ? 'expanded' : ''}`}
                        key={id}
                      >
                        <div
                          className="projectHLBg"
                          style={{
                            background: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <div className="projectHLDetail">
                          <div className="projectBrand">
                            <Logo logoWidth={"25px"} />
                          </div>
                          <h3 className="project-name" onClick={() => window.open(url, '_blank')}>
                            {name}
                          </h3>
                          <div className="projectHLDes-container">
                            <div className="projectHLDes">
                              <p>{description || "No description available."}</p>
                            </div>
                            <div
                              className="read-more-button"
                              onClick={() => toggleExpand(id)}
                            >
                              {isExpanded ? "Read less" : "Read more"}
                            </div>
                          </div>
                          <ul className="projectHLTag">
                            {(tag || "").split(",").map((item, tagIndex) => (
                              <li key={tagIndex}>
                                <BsCaretRight className="icon projectHLTagIcon" />
                                {item.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;