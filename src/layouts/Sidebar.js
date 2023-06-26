import { useState } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Citiapp, MenuBtn, Menu } from "../assets/images/logos";
import { user, userProfile, navigation } from "../constants";
import { Profile } from "../assets/images/users";
import { MyReports } from "../assets/images/icons";
import AddButton from "../components/AddButton";

const NavItems = ({ href, icon, title, toggle }) => {
  let location = useLocation();
  return (
    <Link
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title={title}
      to={href}
      className={`${
        location.pathname === href ? "active nav-link" : "nav-link"
      } ${!toggle && "py-3"}`}
    >
      <img src={icon} alt={title} />
      {!toggle && <span className="ms-3 d-inline-block">{title}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const slideClass = toggleDrawer ? "slide-in" : "slide-out";

  return (
    <>
      <div
        style={
          !toggle
            ? { width: "260px", transition: "0.2s ease-in" }
            : { width: "57px", transition: "0.2s ease-out" }
        }
        className="bg-white sidebarArea d-none d-lg-block"
      >
        <div className="toggleMenu" onClick={() => setToggle(!toggle)}>
          <img src={MenuBtn} alt="menu" className="justify-content-center" />
        </div>
        {!toggle && (
          <div className="mt-2">
            <div className="p-4">
              <img src={Citiapp} alt="citiapp" className="citiappLogo" />
            </div>
            <div className="logoBottom" />
            <Nav vertical className="p-4">
              <AddButton />
              {navigation.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg mt-3">
                  <NavItems {...navi} toggle={toggle} />
                </NavItem>
              ))}
              <div className="logoBottom my-2" />
              <p className="panelHead">MY PANEL</p>
              <NavItem className="sidenav-bg mt-3">
                <NavItems
                  title="My Reports"
                  href="#"
                  icon={MyReports}
                  toggle={toggle}
                />
              </NavItem>
              <div className="userProfile d-flex flex-row p-1 mr-3 gap-2">
                <img
                  src={Profile}
                  alt="user profile"
                  className="profileImg"
                  width="42px"
                  height="42px"
                />
                <div className=" align-items-center mx-1">
                  <p className="fs-5 mb-0">{user.name}</p>
                  <p className="fs-6 mb-0">{user.role}</p>
                </div>
              </div>
              {userProfile.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg mt-3">
                  <NavItems {...navi} toggle={toggle} />
                </NavItem>
              ))}
            </Nav>
          </div>
        )}
        {toggle && (
          <div className="mt-2">
            <div className="mx-2">
              <img
                src={Citiapp}
                alt="citiapp"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </div>
            <Nav vertical className="sidebarNav">
              {navigation.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg mt-3">
                  <NavItems {...navi} toggle={toggle} />
                </NavItem>
              ))}
              {userProfile.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg mt-3">
                  <NavItems {...navi} toggle={toggle} />
                </NavItem>
              ))}
            </Nav>
          </div>
        )}
      </div>
      {/* Small screen navigation */}
      <div className="d-lg-none d-block  relative mobileNav d-flex justify-content-between">
        <div className=" mx-3 d-flex  align-items-center cursor-pointer ">
          <img src={Citiapp} alt="citiapp" className="citiappLogoMob" />
        </div>
        <img
          src={Menu}
          alt="menu"
          className="object-fit-contain cursor-pointer my-auto citiappLogoMob"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <div className={`NavList ${slideClass}`}>
          <Nav vertical className="p-4">
            <AddButton />
            {navigation.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg mt-3">
                <NavItems {...navi} toggle={toggle} />
              </NavItem>
            ))}
            <div className="logoBottom my-2" />
            <p className="panelHead">MY PANEL</p>
            <NavItem className="sidenav-bg mt-3">
              <NavItems
                title="My Reports"
                href="#"
                icon={MyReports}
                toggle={toggle}
              />
            </NavItem>
            <div className="userProfile d-flex flex-row p-1 mr-3 gap-2">
              <img
                src={Profile}
                alt="user profile"
                className="profileImg"
                width="42px"
                height="42px"
              />
              <div className=" align-items-center mx-1">
                <p className="fs-5 mb-0">{user.name}</p>
                <p className="fs-6 mb-0">{user.role}</p>
              </div>
            </div>
            {userProfile.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg mt-3">
                <NavItems {...navi} toggle={toggle} />
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
