import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Schedules } from "./pages/schedules";

function App() {

  return (
    <div className="App" >
      <Router>
          <Routes>
            <Route path='/' element={<Schedules />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
