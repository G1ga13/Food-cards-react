import "./Title.css";

function Title({ title, text, className = "" }) {
  return (
    <>
      <div className="title_container">
        <h1 className={`title ${className}`}>{title}</h1>
      </div>

      <div className="text_container">
        <p className={`text ${className}`}>{text}</p>
      </div>
    </>
  );
}

export default Title;
