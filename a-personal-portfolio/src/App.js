import "./App.css";
import Card from "./Components/card.component";

function App() {
  return (
    <div className="App">
      <Card title={"Hello world!"} description={"hello youtube"} />
      <Card title={" GoodBye Brother!"} description={"Visit Sri lanka "} />
    </div>
  );
}

export default App;
