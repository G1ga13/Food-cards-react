import "./images.css";
import Mark from "../../../assets/images/mark.svg";

function Image({ src, alt = "", className = "" }) {
  return (
    <div className="image_container">
      {" "}
      <img src={src} alt={alt} className={className} />
      <div className="circle">
        <img src={Mark} alt="mark" />
      </div>
    </div>
  );
}

export default Image;
