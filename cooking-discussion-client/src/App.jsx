import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import NabBar from './components/NabBar';
import Home from './components/Home';
import Search from './components/Search';
import Contact from './components/Contact';
import CommunityPost from './components/CommunityPost';

function App() {
  return (
    <Router>
      <NabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/CommunityPost" element={<CommunityPost />} />
      </Routes>
    </Router>
  );
}

export default App;
