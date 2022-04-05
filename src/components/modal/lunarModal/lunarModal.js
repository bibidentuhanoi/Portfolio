import Latern from "./lantern";
import KnotTassel from "./ knotTassel";
import Dragon from "./dragon";
import Coin from "./coin";
import "./lunarModal.css";
import Tiger from "./tiger";
export default function LunarModal({ time }) {
  return (
    <div className="LunarModal">
      <div className="LunarHeader">
        <div id="lantern-1">
          <Latern />
        </div>
        <div id="lantern-2">
          <Latern />
        </div>
        <div id="KnotTass-1">
          <KnotTassel />
        </div>
        <div id="KnotTass-2">
          <KnotTassel />
        </div>
        <div id="KnotTass-3">
          <KnotTassel />
        </div>
        <div id="KnotTass-4">
          <KnotTassel />
        </div>
        <h1>
          Happy Lunar <br />
          New Year!
        </h1>
      </div>
      <div className="LunarBody">
        {time.event ? (
          <>
            <div className="LunarToday">
              <div id="tiger1">
                {" "}
                <Tiger />
              </div>
              <h1>
                Day <br />
                <span>{time.date}</span>
              </h1>
              <div id="tiger2">
                {" "}
                <Tiger />
              </div>
              <h2>Of Lunar New Year</h2>
            </div>
          </>
        ) : (
          <div>
            <div className="LunarCountdown">
              <article>
                <p>{time.days}</p>
                <h3>{time.days <= 1 ? "Day" : "Days"}</h3>
              </article>{" "}
              <article>
                <p>{time.hours}</p>
                <h3>hours</h3>
              </article>{" "}
              <article>
                <p>{time.minutes}</p>
                <h3>minutes</h3>
              </article>{" "}
              <article>
                <p>{time.seconds}</p>
                <h3>seconds</h3>
              </article>
            </div>
            <h2>Until Lunar New Year</h2>
          </div>
        )}
      </div>
      <div className="LunarFooter">
        <p>
          wish you and your loved one Security, good health, and prosperity.
        </p>
        <div className="Deco">
          <div id="coin">
            <Coin />
          </div>
          <div id="dragon">
            <Dragon />
          </div>
          <div id="coin">
            <Coin />
          </div>
        </div>
      </div>
    </div>
  );
}
