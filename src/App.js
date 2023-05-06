import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;