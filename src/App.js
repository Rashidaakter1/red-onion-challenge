
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/signup'element={<Signup></Signup>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
