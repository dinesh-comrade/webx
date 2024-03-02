import "./Navigation.css" 
 
 const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand ms-4" href="#">Dina Pet Care</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link mx-3" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  mx-3" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  mx-3" href="#buy">Buy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  mx-3" href="#sell">Sell</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  mx-3" href="#adopt">Adopt</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle  mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pets
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#pets">Dogs</a></li>
              <li><a className="dropdown-item" href="#pets">Cats</a></li>
              <li><a className="dropdown-item" href="#pets">Hamster</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Others...</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex ">
          <button className="btn btn-nav btn-outline-success rounded-pill px-4 py-1  mx-3" type="button">Login</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    )
 }

 export {Navigation};