import "./Title.css";

function Title({ children, className = "" }) {
  return (
    <>
      <div className="title_container">
        <h1 className={`title ${className}`}>{children}</h1>
      </div>
      <div className="text_container">
        <p className={`text ${className}`}>{children}</p>
      </div>
    </>
  );
}

export default Title;
