import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomNavbar() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <ul>
            <li><Link to="/" data-testid="link-home">Home</Link></li>
            <li><Link to="/categories" data-testid="link-category">Categories</Link></li>
          </ul>
          <div className="d-flex" role="search">
            <p>John Doe</p>
          </div>
        </div>
      </nav>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Outlet />
    </>
  );
}
export default CustomNavbar;
