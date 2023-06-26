import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar_style.css"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ammarimg from "./assests/ammar.png"
import amar1 from "./assests/ammar1.png"
import graph from "./assests/graph.png"
import ProgressBar from "./ProgressBar";
import Service from "../pages/Service";
import Recommendations from "../pages/Recommendations";
import Footer from "./Footer";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import {  Element, animateScroll as scroll } from 'react-scroll';
import Home from "../pages/Home";
import "./Navbar.css";
import Resume from './resume.pdf';



function Navbars() {
  
  return (
    <>
    
      {/* right */}
      
    
      <div className="backg" id="Navbar">
     
      <div className="n-center">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link  style={{
                fontFamily:'Open Sans, sans-serif',
                
              }} className="navlink_style"activeClass="active" to="Navbar" spy={true} 
              smooth={true} offset={-70}
              duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link style={{
                fontFamily:'Open Sans, sans-serif'
              }} to="Portfolio" spy={true} smooth={true} offset={-70}
              duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link style={{
                fontFamily:'Open Sans, sans-serif'
              }} to="Service" spy={true} smooth={true} offset={-70}
              duration={500}>
                Service
              </Link>
            </li>
            <li>
              <Link style={{
                fontFamily:'Open Sans, sans-serif'
              }} to="Contact" spy={true} smooth={true} offset={-70}
              duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <Link style={{
                fontFamily:'Open Sans, sans-serif'
              }} to="Recommendations" spy={true} smooth={true} offset={-70}
              duration={500}>
                Recommendations
              </Link>
            </li>
            <li>
              <Link style={{
                fontFamily:'Open Sans, sans-serif'
              }} to="testimonial" spy={true} smooth={true}>
                Blogs
              </Link>
            </li>
            <li>
              <a href={Resume} download>
            <button style={{
                fontFamily:'Open Sans, sans-serif'
              }} className="btnstyle" style={{
                  marginTop:'-10px',
                  ackgroundColor: "#F75023",
                  color:'white',
                 
                  padding:'7px 20px 7px 20px',
                  borderRadius:'30px'
                }} >Download CV</button>
                </a>
            </li>
          </ul>
        </div>
       
      </div>
            

         






      
        <Container className="sli">
          <Row>
            <Col style={{
              marginLeft: "120px"
            }}>
              <div>
                <p style={{
                  color: "#F75023",
                  fontSize: "22px",
                  fontFamily:'Open Sans, sans-serif'
                }}>Hello, I'm</p>
                <h2 style={{
                  fontStyle: "italic",
                  fontWeight:'normal',
                  fontSize:"30px",
                  marginTop:'-18px',
                  marginBottom:"15px",
                  fontFamily:'Open Sans, sans-serif'
                }}>Ammar Bin Akthar</h2>
                <h5 style={{
                  fontWeight:'normal',
                  marginBottom:"20px",
                  fontFamily:'Open Sans, sans-serif'
                }}>PAKISTAN</h5>
                <h5 style={{
                  fontStyle: "italic",
                  marginBottom:'40px',
                  marginLeft:"-6px",
                 
                  fontSize:'20px',
                  fontFamily:'Open Sans, sans-serif'
                }}>I Help Software Houses In Their. Business Growth</h5>
                
                <button className="btnsty" to="about" style={{
                  
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'13px 35px 13px 35px',
                  borderRadius:'30px',
                  fontFamily:'Open Sans, sans-serif'
                }} >About me</button>
              </div>
            </Col>
            <Col style={{
              marginTop: "-60px",

              display: "flex",
              justifyContent: "center",
            }}>
              <img className="img_style" src={ammarimg} />
            </Col>
          </Row>
        </Container>

      </div>

     




         
        


    </>
  );
}

export default Navbars;