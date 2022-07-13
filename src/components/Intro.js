import { Container } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="bgintroo text-start">
      <Container>
        <div className="at">
          <span className="start1 border border-primary rounded mt-4 pb-2 px-1">
            Start Gym Now Or No!
          </span>
        </div>
        <svg
          className="svg1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1BA098"
            d="M44.9,-75.3C54.5,-63.7,56,-45,61.1,-29.2C66.3,-13.5,75.2,-0.7,76,12.7C76.9,26.1,69.7,40.2,58.2,46.7C46.7,53.1,30.8,52.1,15.9,58.6C0.9,65,-13.2,79.1,-23.4,77.2C-33.6,75.4,-39.9,57.7,-44.4,43.5C-48.8,29.3,-51.6,18.5,-58.4,5.3C-65.2,-8,-76,-23.9,-71.8,-32.7C-67.6,-41.5,-48.3,-43.3,-33.8,-52.6C-19.3,-62,-9.7,-78.8,4,-85C17.7,-91.3,35.3,-86.8,44.9,-75.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <image className="img"></image>
        <div>
          <p className="textintroo">
            <b>Web Gym Motivation </b>
            <p className="px-4 p2">Trusted, Updated, And Up-To-Date</p>
            <p className="p3">
              <b>Start Working Out Right Now</b>
            </p>
            <span className="startn text-dark border border-primary rounded mt-1 pb-1 px-1">
              Start Gym Now Or No!
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
