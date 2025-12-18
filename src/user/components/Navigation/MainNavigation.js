import React from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const location = useLocation();

  // ✅ CLOSE DRAWER ON ROUTE CHANGE
  React.useEffect(() => {
    setDrawerIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={() => setDrawerIsOpen(false)} />}

      {drawerIsOpen && (
        <SideDrawer show={drawerIsOpen}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setDrawerIsOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
