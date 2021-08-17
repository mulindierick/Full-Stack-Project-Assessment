import "./App.css";
import data from "./exampleresponse.json";

function App() {
  let newData = data;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
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
