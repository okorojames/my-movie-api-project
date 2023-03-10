import navLogo from "../images/logo-no-bg.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={navLogo} alt="" className="navLogo" />
        <div className="nav-col-2">
          <div className="navLinks">
            <a href="" className="navLink">
              Home
            </a>
            <a href="" className="navLink">
              Movies
            </a>
          </div>
          <form className="searchMovieForm">
            <input type="text" placeholder="Search Movie" />
            <p>
              <i className="bx bx-search searchMovieIcon"></i>
              <input type="submit" value="Search" />
            </p>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
