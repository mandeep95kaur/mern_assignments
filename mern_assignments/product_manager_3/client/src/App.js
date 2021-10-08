import logo from "./logo.svg";
import "./App.css";
import ProductForm from "./components/ProductForm";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Update from "./views/Update";
import DisplayProduct from "./components/DisplayProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <DisplayProduct path="/:_id" />
        <Update path="/:_id/edit" />
      </Router>
    </div>
  );
}

export default App;
