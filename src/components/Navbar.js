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





function Navbars() {
  
  return (
    <>
      <div className="backg">
        <Container className="contain">
          <Nav className="justify-content-center" variant="underline">
            <Nav.Item className="item">
              <NavLink className="navlink_style" to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlink_style" to="/portfolio">Portfolio</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlink_style" to="/service">Service</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlink_style" to="/contact">Contact</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlink_style" to="/recommendation">Recommendations</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlink_style" to="/blogs">Blogs</NavLink>
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
                  fontSize: "22px"
                }}>Hello, I'm</p>
                <h2 style={{
                  fontStyle: "italic",
                  fontWeight:'normal',
                  fontSize:"30px",
                  marginTop:'-18px',
                  marginBottom:"15px"
                }}>Ammar Bin Akthar</h2>
                <h5 style={{
                  fontWeight:'normal',
                  marginBottom:"20px"
                }}>PAKISTAN</h5>
                <p style={{
                  fontStyle: "italic",
                  marginBottom:'40px',
                  marginLeft:"-10px"
                }}>I Help Software Houses In Their. Business Growth</p>
                
                <button className="btnsty" style={{
                  
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'10px 30px 10px 30px',
                  borderRadius:'30px'
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
            fontWeight: 'bold'
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
                marginTop:'-52px'
              }} />
            </Col>
            <Col>
              <div  >
                <h4 style={{
                  color: "#F75023",
                  fontWeight: 'normal',
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

                }}>I help Software houses in their business growth</h4>
                <p style={{

marginTop:"20px",
                  paddingLeft: '35px',
                  paddingRight:'50px',
                  textAlign:"start"
                  
                  



                }}>Business Growth Manager with specialty in startups. I spend many years working with startups and aware of complete echo cycle about the small and medium Enterprises that are related to software development. Precisely i am a start-up Specialist with extensive knowledge in business development along with Project Engagement management in Software Industry.</p>
                <button style={{
                  marginLeft:'35px',
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'10px 30px 10px 30px',
                  borderRadius:'30px',
                  marginTop:'25px'
                }} >Hire me</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>




      
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "90px",
            fontStyle: 'italic',
            fontWeight:'normal'
          }
          }
        >Portfolio</h2>
        <Container >
          <Row>
            <Col style={{
             paddingLeft:"70px",
             marginTop:"-75px"
        }}>
              <h2
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
          
        }}>
        
        Business Development
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"200px",
          color:"#F75023"
          
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
          
        }}>
        
        Team Leadership                                    .
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"200px",
          color:"#F75023"
          
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
          
        }}>
        
        Project Management
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"200px",
          color:"#F75023"
          
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
          
        }}>
        
        Web Development
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"200px",
          color:"#F75023"
          
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
          
        }}>
        
        Software Developed
        </h6>
        <h6 style={{
          marginBottom:'-38px',
          marginTop:'25px',
          marginLeft:"200px",
          color:"#F75023"
          
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
  


    </>
  );
}

export default Navbars;