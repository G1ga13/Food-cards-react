import "./images.css";

function Image({ src, alt = "", className = "" }) {
  return (
    <div className="image_container">
      {" "}
      <img src={src} alt={alt} className={className} />
    </div>
  );
}

export default Image;
