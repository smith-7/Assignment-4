import { BrowserRouter as Router,Route, Routes,Link } from "react-router-dom";

import Home from "./pages/home/Home";
import Newpage from "./pages/newpage/Newpage";
import Newpagetwo from "./pages/newpagetwo/Newpagetwo";
import Newpagethree from "./pages/newpagethree/Newpagethree";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route  path="/"  element={<Home/>}/>
        <Route  path="/one"  element={<Newpage/>}/>
        <Route  path="/two"  element={<Newpagetwo/>}/>
        <Route  path="/three"  element={<Newpagethree/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
