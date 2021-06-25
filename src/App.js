import "./App.css";
import { Header } from "./components/Header";
import Scheduler from "./components/Scheduler";
// AIzaSyCyXF1OduouNPxZlIc7TQAGI-U39s1j-HI - api
// 18315331898-g1ctm767qsqnufi3e7p5vr5km88tlk6d.apps.googleusercontent.com - clientid
function App() {
  return (
    <div className="App">
      <Header />
      <Scheduler />
    </div>
  );
}

export default App;
