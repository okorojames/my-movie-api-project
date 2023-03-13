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
      {/*  */}
      <main
        className="main-section"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="main-section-h2">Welcome To JNetFlix.</h2>
        <p className="main-section-paragraph-one">
          Download your favorite movies easily.
        </p>
        <i className="bx bx-chevron-down main-section-chevron-icon"></i>
      </main>
    </header>
  );
};

export default Header;
