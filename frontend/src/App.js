import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Files from "./components/Files";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Categories />
        <Files />
      </div>
    </div>
  );
}

export default App;
