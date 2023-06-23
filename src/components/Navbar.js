import { Link, NavLink } from "react-router-dom";
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





function Navbars() {
  
  return (
    <>
      <div className="backg">
        <Container className="contain">
          <Nav className="justify-content-center" variant="underline">
            <Nav.Item className="item">
              <NavLink style={{
                fontFamily:'Open Sans, sans-serif'
              }} className="navlink_style" to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={{
                fontFamily:'Open Sans, sans-serif'
              }} className="navlink_style" to="/portfolio">Portfolio</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={{
                fontFamily:'Open Sans, sans-serif'
              }} className="navlink_style" to="/service">Service</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={{
                fontFamily:'Open Sans, sans-serif'
              }} className="navlink_style" to="/contact">Contact</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={{
                fontFamily:'Open Sans, sans-serif'
              }} className="navlink_style" to="/recommendation">Recommendations</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink style={{
                fontFamily:'Open Sans, sans-serif'
              }} className="navlink_style" to="/blogs">Blogs</NavLink>
            </Nav.Item>
            <Nav.Item>
              <button className="btnstyle" style={{
                  marginTop:'-10px',
                  ackgroundColor: "#F75023",
                  color:'white',
                 
                  padding:'7px 20px 7px 20px',
                  borderRadius:'30px'
                }} >Download CV</button>
            </Nav.Item>

          </Nav>






        </Container>
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
                
                <button className="btnsty" style={{
                  
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

      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "90px",
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontFamily:'Open Sans, sans-serif'
          }
          }
        >About</h1>
        <Container>
          <Row>
            <Col style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}>
              <img src={amar1} style={{
                width: "80%",
                marginTop:'-100px'
              }} />
            </Col>
            <Col>
              <div  >
                <h4 style={{
                  color: "#F75023",
                  fontFamily:'Open Sans, sans-serif',
                  fontStyle: 'italic',
                  display: 'flex',
                  justifyContent: 'center',
                 
                  
                }}>Business Development & Project Management</h4><br />

                <h4 style={{

                  fontWeight: 'normal',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  textAlign: 'center',
                  marginTop:'-30px',
                  fontFamily:'Open Sans, sans-serif'

                }}>I help Software houses in their business growth</h4>
                <p style={{

marginTop:"20px",
                  paddingLeft: '35px',
                  paddingRight:'50px',
                  textAlign:"start",
                  fontSize:"17px",
                  fontFamily:'Open Sans, sans-serif',
                  color:'#080809'
                  



                }}>Business Growth Manager with specialty in startups. I spend many years working with startups and aware of complete echo cycle about the small and medium Enterprises that are related to software development. Precisely i am a start-up Specialist with extensive knowledge in business development along with Project Engagement management in Software Industry.</p>
                <button style={{
                  marginLeft:'35px',
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'13px 40px 15px 40px',
                  borderRadius:'30px',
                  marginTop:'25px'
                }} >Hire me</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>




      <div style={{
        paddingBottom:'80px'
      }}>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "90px",
            fontStyle: 'italic',
            
          }
          }
        >Portfolio</h2>
        <Container >
          <Row>
            <Col style={{
             paddingLeft:"70px",
             marginTop:"-75px"
        }}>
              <h2 style={{
                fontFamily:'Open Sans, sans-serif'
              }}
        >Skills</h2>
       
       <div style={{
        marginLeft:"-50px"
       }}>
        <div style={{
          display:'flex'
        }}> 
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"50px",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
        
        Business Development
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"150px",
          color:"#F75023",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
          99%
        </h6>
       
        </div>
        
        
    </div>
    <ProgressBar done="99" colors="#F75023" />
 


    <div style={{
        marginLeft:"-50px",
        marginTop:"-55px"
       }}>
        <div style={{
          display:'flex'
        }}> 
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"50px",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
        
        Team Leadership                                    .
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"193px",
          color:"#F75023",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
          99%
        </h6>
       
        </div>
        
        
    </div>
    <ProgressBar done="99" colors="#44322E" />



    
    <div style={{
        marginLeft:"-50px",
        marginTop:"-55px"
       }}>
        <div style={{
          display:'flex'
        }}> 
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"50px",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
        
        Project Management
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"167px",
          color:"#F75023",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
          
        }}>
          99%
        </h6>
       
        </div>
        
        
    </div>
    <ProgressBar done="99" colors="#1CBE59" />



    
    <div style={{
        marginLeft:"-50px",
        marginTop:"-55px"
       }}>
        <div style={{
          display:'flex'
        }}> 
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"50px",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
        
        Web Development
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"188px",
          color:"#F75023",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
          99%
        </h6>
       
        </div>
        
        
    </div>
    <ProgressBar done="99" colors="#DE873D" />



    
    <div style={{
        marginLeft:"-50px",
        marginTop:"-55px"
       }}>
        <div style={{
          display:'flex'
        }}> 
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"50px",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
        
        Software Developed
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"173px",
          color:"#F75023",
          fontSize:'20px',
          fontFamily:'Open Sans, sans-serif'
        }}>
          99%
        </h6>
       
        </div>
        
        
    </div>
    <ProgressBar  done="99" colors="#8067F0"/>


            </Col>
            <Col style={{
              marginTop:"-70px"
            }}>
              <img src={graph} style={{
                width:"80%",
                
              }}/>

            </Col>
          </Row>
        </Container>
        </div>

        <Service />
        <Recommendations />
        <Contact style={{
          
        }}
        />
        <Footer />


    </>
  );
}

export default Navbars;