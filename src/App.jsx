import { Navbar } from "./components/Navbar"
import { User } from "./components/user"
import './assets/css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App=()=>{
 return(
  <>
    <BrowserRouter>
    <Navbar/>
   <Routes>
   <Route path="/" element={<User/>} />
   </Routes>
   </BrowserRouter>
  </>
 )
}

export default App;