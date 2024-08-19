import "./buttons.css";
function Buttons({ buttonOnClick }) {
  let buttonKey = [
    "c",
    "/",
    "%",
    "*",
    "9",
    "8",
    "7",
    "+",
    "6",
    "5",
    "4",
    "-",
    "3",
    "2",
    "1",
    "( )",
    "00",
    ".",
    "0",
    "=",
  ];
  return (
    <div className="buttons">
      {buttonKey.map((key) => (
        <button key={key} className="btn" onClick={()=> buttonOnClick(key)}>
          {key}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
