import React from 'react'
import ProgressBar from '../components/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import graph from "../components/assests/graph.png"


const Portfolio = () => {
  const progress = 65;

  return (
    <div style={{
      paddingBottom:'80px'
    }} id='Portfolio'>
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
  );
}


export default Portfolio