import "./App.css";
import data from "./exampleresponse.json";

function App() {
  let newData = data;
  let x = "https://www.youtube.com/watch?v=HerCR8bw_GE";
  let b = x.split("=");
  console.log(b[b.length - 1]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>commendation</h1>
      </header>
      <div>
        {newData.map((item, index) => (
          <iframe
            title="x"
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${
              item.url.split("=")[item.url.split("=").length - 1]
            }`}
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default App;
