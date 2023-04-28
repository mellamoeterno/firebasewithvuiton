import{ useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from 'C:\Users\PC\Desktop\reactporfolio\my-app\src\img\instagram.png';
import navIcon1 from 'C:\Users\PC\Desktop\reactporfolio\my-app\src\img\home.png';
import navIcon2 from 'C:\Users\PC\Desktop\reactporfolio\my-app\src\img\skills.png';
import navIcon3 from 'C:\Users\PC\Desktop\reactporfolio\my-app\src\img\project.png';



export const NavBar = () => {
  const {activeLink, setActiveLink} = useState('home');   //this related to the 'import{useState}from"react";'
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  //this use effect made after const active link and const scrolled made

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
//this made after change into some nav parts

    return (
       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img src="(logo)" alt="Logo"/>
              </Navbar.Brand> //put image here on the nav bar brand
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> //icon on the navbar toggle
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                //deleted nav drop down
              </Nav>
              <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a> //for wathever reason we dont put the path on href on those
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <button className="vvd"><span>Let's Connect</span></button>
              </span>
              //social icon with navbar text and other stuff
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }