import AppLogo from "./AppLogo";
function AppHeader() {
  const service = 1;
  const ref = localStorage.getItem("ref");
  const price = 5.99;

  const paymentLink = `https://3ds.challange.shop?service=${service}&ref=${ref}&price=${price}`;

  return (
    <header className="AppHeader">
      <nav className="AppHeader__navbar navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top">
        <div className="AppHeader__inner container">
          <a className="navbar-brand" href="#">
            <AppLogo />
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-primary"
                aria-current="page"
                href={paymentLink}
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
