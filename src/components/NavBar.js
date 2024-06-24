import { useState,useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo3.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=> {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <img src={logo} alt="logo"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ?'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Accueil</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ?'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Compétences</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'project' ?'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Projets</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mahmut-ali-topal-398741258/"><img src={navIcon1} alt=""/></a>
                            <a href="https://github.com/TopalMahmutAli/"><img src={navIcon2} alt=""/></a>
                            
                        </div>
                        
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}