import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import AllAuthor from "./components/AllAuthor";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthor path="/" />
        <NewAuthor path="/new" />
        <EditAuthor path="/edit/._id" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
