import React from "react";
import { NavbarText } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isStudent } from "../../utils";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { setUserInfo } from "../../redux/auth/authSlice";

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
      signOut(auth).then(() => {
        dispatch(setUserInfo({}));
      });
  }

  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="/">Library Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo?.uid ? (
                <>
                  <NavbarText> Welcome, {userInfo.fName}</NavbarText>
                  {isStudent(userInfo) ? (
                    <Link to="/history" className="nav-link">
                      Orders
                    </Link>
                  ) : (
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  )}
                  <Link to="/#" onClick={handleLogOut} className="nav-link">
                    Sign Out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/sign-up" className="nav-link">
                    Sign-up
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
