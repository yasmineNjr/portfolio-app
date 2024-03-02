import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Bio from './pages/Bio';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter >
      <Layout>
        <Routes>
          <Route exact path="/" element={<Bio/>}/>
          <Route exact path="/Bio" element={<Bio/>} />
          <Route exact path="/AboutMe" element={<AboutMe/>} />
          <Route exact path="/Services" element={<Services/>} />
          <Route exact path="/Projects" element={<Projects/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
