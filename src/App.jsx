import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';
import Contact from './components/Contact';
import CommunityPost from './components/CommunityPost';
import Login from './components/Login';
import Signup from './components/SignUp';
import CartIndex from './products/CartIndex';
import PaymentProcessing from './products/Payment';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dishes/:id/recipes" element={<RecipeDetails/>} />
        <Route path="/checkout" element={<PaymentProcessing />} />
        <Route path="/CartIndex" element={<CartIndex />} />
        <Route path="/CommunityPost" element={<CommunityPost />} />
      </Routes>
    </Router>
  );
}

export default App;
