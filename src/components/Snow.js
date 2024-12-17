import "./Snow.css";

function Snow() {
  return (
    <div className="initial-snow">
      {Array(40)
        .fill(null)
        .map(() => (
          <div className="snow">&#10052;</div>
        ))}
    </div>
  );
}

export default Snow;
