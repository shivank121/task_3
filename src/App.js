import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Code_of_conduct from './Pages/Code_of_conduct';
import Governance from './Pages/Governance';
import News_update from './Pages/New_update';
import FAQ from './Pages/FAQ';
import Download from './Pages/Download';
import Privacy_policy from './Pages/Privacy_policy';
import Disclamer from './Pages/Disclamer';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
      
        <Route path="/" element={<Layout/>}>
         <Route index element={<Navigate to="/home" replace/> } />
         <Route path='/home' element={<Home/>} />
         <Route path='/dashboard' element={<Dashboard/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/governance' element={<Governance/>} />
         <Route path='/code' element={<Code_of_conduct/>} />
         <Route path='/new' element={<News_update/>} />
         <Route path='/faqs' element={<FAQ/>} />
         <Route path='/download' element={<Download/>} />
         <Route path='/privacy' element={<Privacy_policy/>} />
         <Route path='/disclamer' element={<Disclamer/>} />


        </Route>
      </Routes>
    </div>
  );
}

export default App;
