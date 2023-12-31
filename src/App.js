import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Home from './pages/Home';
import About from './pages/About';
import Code_of_conduct from "./pages/Code_of_conduct";
// import Governance from './Pages/Governance';
// import News_update from './Pages/New_update';
import FAQ from "./pages/FAQ";
// import Download from './Pages/Download';
import Privacy_policy from './pages/Privacy_policy';
import Home from "./pages/Home"
import Desclaimer from './pages/Desclaimer';
import Governance from './pages/Governance';

function App() {

  return (

    <div className="App">
      <Routes>
      
        <Route path="/" element={<Layout/>}>
         <Route index element={<Navigate to="/home" replace/> } />
         <Route path='/home' element={<Home/> } />
         <Route path='/about' element={<About/>} />
         <Route path='/governance' element={<Governance/>} />
         <Route path='/code' element={<Code_of_conduct/>} />
         <Route path='/news' element={<Code_of_conduct/>} />
         <Route path='/faqs' element={<FAQ/>} />
         <Route path='/download' element={<FAQ/>} />
         <Route path='/privacy' element={<Privacy_policy/>} />
         <Route path='/disclaimer' element={<Desclaimer/>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
