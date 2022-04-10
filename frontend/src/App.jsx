import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageNavigation from "./widgets/sections/PageNavigation";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <div className="App">
        <PageNavigation />
      </div>
    </Router>
  );
}

export default App;
