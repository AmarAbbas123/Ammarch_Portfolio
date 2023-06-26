import React from 'react'
import "./Recommendations.css"
import { Col, Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import str from "../components/assests/str.png"
import str2 from "../components/assests/str2.png"
import str3 from "../components/assests/str3.png"
import str4 from "../components/assests/str4.png"

import { flushSync } from 'react-dom';
import "./Service.css"

const Service = () => {
  return (
    <>
    <div style={{
      background: 'linear-gradient(to bottom, #B08F9D, #8A8BE4)',
      paddingTop:"80px",
      paddingBottom:"9%"
    }} id='Service'>
    <h2 style={{
       marginBottom:'20px',
       
       
      
      textAlign:'center',
      fontStyle:'italic',
      
      fontSize:'35px',
      fontFamily:'Open Sans, sans-serif'
    }}>Services</h2>
    <div className='main'>
   <Container>
    <Row>
   
     <Col>
     <Card style={{ width: '33.5rem',
       padding:"8%",
       borderRadius:"13px"
        
    }} >
     
      <Card.Body>
      <div style={{
          display:'flex',
          
          
        }}> 
        <Card.Img  src={str}  style={{
          width:"35%",

        }}/>
        <div style={{
          display:"block"
        }}>
        <Card.Title style={{
          marginTop:"10px",
          paddingLeft:'30px',
          fontSize:'25px',
          fontFamily:'Open Sans, sans-serif'
        }}>Business Strategy</Card.Title>
        
      
        </div>
        
        </div>
        
        <Card.Text  style={{
          display:'block',
          fontSize:"17px",
          paddingLeft:'30%',
          color:"#6F6B80",
          fontFamily:'Open Sans, sans-serif'
        }}>
        Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
        </Card.Text>
        <div style={{
          display:"flex",
          justifyContent:'center',
          paddingTop:'4%'
        }}>
        <button  style={{
                  
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'13px 35px 13px 35px',
                  borderRadius:'30px',
                  fontFamily:'Open Sans, sans-serif'
                }} >Contact Now</button>
        </div>
        
      </Card.Body>
    </Card>
     </Col>
     
     <Col>
     <Card style={{ width: '33.5rem',
       paddingTop:"8%",
       paddingLeft:"8%",
       paddingRight:'8%',
       paddingBottom:"7%",
       borderRadius:"13px"
      
        
    }} >
     
      <Card.Body>
      <div style={{
          display:'flex',
        
          
          
        }}> 
        <Card.Img  src={str2}  style={{
          width:"35%",

        }}/>
        <div style={{
          display:"block"
        }}>
        <Card.Title style={{
          marginTop:"10px",
          paddingLeft:'30px',
          fontSize:'25px',
          fontFamily:'Open Sans, sans-serif'
        }}>Business Development</Card.Title>
        
      
        </div>
        
        </div>
        
        <Card.Text  style={{
          display:'block',
          fontSize:"17px",
          paddingLeft:'30%',
          color:"#6F6B80",
          fontFamily:'Open Sans, sans-serif'
        }}>
        Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
        </Card.Text>
        <div style={{
          display:"flex",
          justifyContent:'center',
          
        }}>
        <button  style={{
                  
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'13px 35px 13px 35px',
                  borderRadius:'30px',
                  fontFamily:'Open Sans, sans-serif'
                }} >Contact Now</button>
        </div>
        
      </Card.Body>
    </Card>
     
     </Col>
   
    </Row>





    <Row style={{
      paddingTop:'4%'
    }}>
    <Col>
     <Card style={{ width: '33.5rem',
       paddingTop:"8%",
       paddingLeft:"8%",
       paddingRight:'8%',
       paddingBottom:"3%",
       borderRadius:"13px"
        
    }} >
     
      <Card.Body>
      <div style={{
          display:'flex',
          
          
        }}> 
        <Card.Img  src={str3}  style={{
          width:"25%",

        }}/>
        <div style={{
          display:"block"
        }}>
        <Card.Title style={{
          marginTop:"10px",
          paddingLeft:'30px',
          fontSize:'25px',
          fontFamily:'Open Sans, sans-serif'
        }}>Business Analysis</Card.Title>
        
      
        </div>
        
        </div>
        
        <Card.Text  style={{
          display:'block',
          fontSize:"17px",
          paddingLeft:'30%',
          color:"#6F6B80",
          fontFamily:'Open Sans, sans-serif'
        }}>
        Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
        </Card.Text>
        <div style={{
          display:"flex",
          justifyContent:'center',
          paddingTop:'4%',
          
        }}>
        <button  style={{
                  
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'13px 35px 13px 35px',
                  borderRadius:'30px',
                  fontFamily:'Open Sans, sans-serif'
                }} >Contact Now</button>
        </div>
        
      </Card.Body>
    </Card>
     </Col>
     
     <Col>
     <Card style={{ width: '33.5rem',
       padding:"8%",
       borderRadius:"13px"
        
    }} >
     
      <Card.Body>
      <div style={{
          display:'flex',
          
          
        }}> 
        <Card.Img  src={str4}  style={{
          width:"35%",

        }}/>
        <div style={{
          display:"block"
        }}>
        <Card.Title style={{
          marginTop:"10px",
          paddingLeft:'30px',
          fontSize:'25px',
          fontFamily:'Open Sans, sans-serif'
        }}>Web Development</Card.Title>
        
      
        </div>
        
        </div>
        
        <Card.Text  style={{
          display:'block',
          fontSize:"17px",
          paddingLeft:'30%',
          color:"#6F6B80",
          fontFamily:'Open Sans, sans-serif'
        }}>
        Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
        </Card.Text>
        <div style={{
          display:"flex",
          justifyContent:'center',
          paddingTop:'4%'
        }}>
        <button  style={{
                  
                  backgroundColor: "#F75023",
                  color:'white',
                  borderStyle:"none",
                  padding:'13px 35px 13px 35px',
                  borderRadius:'30px',
                  fontFamily:'Open Sans, sans-serif'
                }} >Contact Now</button>
        </div>
        
      </Card.Body>
    </Card>
     
     </Col>
    </Row>
   </Container>
   </div>
   </div>
   </>
  )
}

export default Service