import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Get from "./Layouts/Get/Get";
import HelpAndSupport from "./Layouts/HelpandSupport/HelpAndSupport";
import Post from "./Layouts/Post/Post";
import Profile from "./Layouts/Profile/Profile";
function App() {

  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/get" element={<Get/>}/>
                <Route path="/post" element={<Post/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/helpAndSupport" element={<HelpAndSupport/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
