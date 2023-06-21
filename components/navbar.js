"use client";

import { useState, useEffect, useCallback } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, []);

  const handleActive = useCallback((value) => {
    setActive(value);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Navbar expand="lg" className={scroll ? "scroll" : ""}>
        {/* <Container> */}
        {/* <Navbar.Brand href="#home">
            {/* <Image src="/logo.png" alt="Logo" width={70} height={70}></Image> */}
        {/* </Navbar.Brand> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link
              href="/"
              className={
                active === "Home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handleActive("Home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="/blog"
              className={
                active === "Blog" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handleActive("Blog")}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <span className="navbar-text">
              <div className="social-icon"></div>
              <Link href="#"></Link>
              {/* <button
                className="vvd justify-content-end margin-left-200"
                onClick={() => {
                  console.log("connect");
                }}
              >
                <span>Connect</span>
              </button> */}
        {/*} </span> */}
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default Menu;
