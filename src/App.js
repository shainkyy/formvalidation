import "./App.css";

import Navbar from "./components/Navbar";
import Simple from "./components/Simple";
import AddingDynamic from "./components/AddingDynamic";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Simple />
        <AddingDynamic />
      </div>
    </div>
  );
}

export default App;
