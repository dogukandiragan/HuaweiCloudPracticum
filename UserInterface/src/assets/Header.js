import { Link } from "react-router-dom";
import { useState } from "react";
import hlogo from "./hlogo.png";
import psale from "./presale.png";

function Header() {

  const [openedDrawer, setOpenedDrawer] = useState(false)



  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={changeNav}>
          <img  
              
              alt="" src={psale}/>

            
            <span className="ms-2 h5">Presale Center</span>
          </Link>
          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/#" className="nav-link">
                  by hwcdogukandiragan
                </Link>
              </li>
            </ul>
            
            
            </div>
            <img  
              
                alt="" src={hlogo}/>
  
         
        </div>
      </nav>
    </header>
  );
}

export default Header;
