import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Categories />
      </div>
    </div>
  );
}

export default App;
