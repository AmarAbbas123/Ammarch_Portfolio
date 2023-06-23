import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container,Row,Col } from 'react-bootstrap';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Icon = () => {
  return (
    <>
   <div style={{
    padding:'7px',
    marginTop:"10px"
   }}>
    <Container>
        <Row>
            <Col>
   
            <div style={{
        borderStyle:"none",
        backgroundColor:"#FEDFD7",
        width:'88px',
        height:"88px",
        borderRadius:"100%",
        display:"flex",
        justifyContent:'center',
        alignItems:'center'
    }}>
      <FontAwesomeIcon icon={faMapMarkerAlt} style={{
        width:'20px',
        height:"40px",
        color:'#F75023',
        
        
    
      }} />
      </div>
      </Col>
     
      <Col>
      <h4 style={{
        display:'flex',
        paddingTop:"20px",
        marginLeft:"-170px",
        width:"224px",
        height:"32px",
        fontWeight:'normal'
        
      }}>Rawalpindi pakistan</h4>
      <p style={{
        display:'flex',
        paddingTop:"10px",
        marginLeft:"-170px",
        width:"181px",
        height:"16px",
        color:"#6F6B80"
      }}>20, Somewhere in world</p>
      </Col>
      
      </Row>
    </Container>
    </div>



    <div style={{
        padding:"7px"
    }}>
    <Container>
        <Row>
            <Col>
   
            <div style={{
        borderStyle:"none",
        backgroundColor:"#DDF5E6",
        width:'88px',
        height:"88px",
        borderRadius:"100%",
        display:"flex",
        justifyContent:'center',
        alignItems:'center'
    }}>
      <FontAwesomeIcon icon={faEnvelope}  style={{
        width:'25px',
        height:"50px",
        color:'#1CBE59',
        
        
    
      }} />
      </div>
      </Col>
     
      <Col>
      <h4 style={{
        display:'flex',
        paddingTop:"20px",
        marginLeft:"-170px",
        width:"224px",
        height:"32px",
        fontWeight:'normal'
        
      }}>Email</h4>
      <p style={{
        display:'flex',
        paddingTop:"10px",
        marginLeft:"-170px",
        width:"181px",
        height:"16px",
        color:"#6F6B80"
      }}>alilogics@gmail.com</p>
      </Col>
      
      </Row>
    </Container>
    </div>



    <div style={{
    padding:'7px'
   }}>
    <Container>
        <Row>
            <Col>
   
            <div style={{
        borderStyle:"none",
        backgroundColor:"#ECE8FD",
        width:'88px',
        height:"88px",
        borderRadius:"100%",
        display:"flex",
        justifyContent:'center',
        alignItems:'center'
    }}>
      <FontAwesomeIcon icon={faWhatsapp} style={{
        width:'60px',
        height:"40px",
        color:'#2DA728',
        
        
    
      }} />
      </div>
      </Col>
     
      <Col>
      <h4 style={{
        display:'flex',
        paddingTop:"20px",
        marginLeft:"-170px",
        width:"224px",
        height:"32px",
        fontWeight:'normal'
        
      }}>Phone</h4>
      <p style={{
        display:'flex',
        paddingTop:"10px",
        marginLeft:"-170px",
        width:"181px",
        height:"16px",
        color:"#6F6B80"
      }}>+92 3215265188</p>
      </Col>
      
      </Row>
    </Container>
    </div>
    
    
    </>
  );
};

export default Icon;
