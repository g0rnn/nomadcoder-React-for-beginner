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
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;