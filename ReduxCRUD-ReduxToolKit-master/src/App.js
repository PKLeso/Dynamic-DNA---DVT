
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import UserListing from './component/UserListing';
import AddUser from './component/AddUser';
import UpdateUser from './component/UpdateUser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/user"}>User</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<UserListing></UserListing>}></Route>
            <Route path="/user/add" element={<AddUser />}></Route>
            <Route path="/user/edit/:code" element={<UpdateUser />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer className="toast-position" position='bottom-right'></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
