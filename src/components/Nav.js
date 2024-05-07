// import './App.css';
// import Navbar from './components/Navbar'
import './Nav.css';
import icon from './images/icon.png'
function Nav() {
  return (
    <div className="Navbar-item">
    <div className="logo">
       <img src={icon} alt="react logo" />
    </div>
    <div className="list">
      <div className="menu"><a href=" "><p>Home</p></a></div>
      <div className="about"><a href=" "><p>About</p></a></div>
      <div className="contact"><a href=" "><p>Contact</p></a></div>
    </div>
  
</div>
  );
}

export default Nav;