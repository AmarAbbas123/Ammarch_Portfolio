import React from 'react'
import "./Recommendations.css"
import { Col, Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rec1 from "../components/assests/rec1.png"
import rec2 from "../components/assests/rec2.png"
import rec3 from "../components/assests/rec3.png"

const Recommendations = () => {
  return (
    <>
    <div style={{
      paddingTop:"3.3%",
      paddingBottom:"10%"
    }}>
    <h3 style={{
      marginBottom:'50px',
      textAlign:'center',
      fontStyle:'italic',
      fontFamily:'Open Sans, sans-serif',
      fontSize:'25px'
    }}>Recommendations</h3>
    <div className='main'>
   <Container>
    <Row>
   
     <Col>
     <Card style={{ width: '22rem',
       
        
    }} className='sha'>
     
      <Card.Body>
        
        <Card.Text className='tex1'>
        Ammar is a great individual with exceptional skills. He will go above and beyond to help your business grow, he will be always open to giving suggestions and is a proactive communicator. Definitely recommended for anyone who is looking to build their business
        </Card.Text>
        <div style={{
          display:'flex'
        }}> 
        <Card.Img variant="top" src={rec1} className='img1' style={{
          width:"60px",
          height:"60px"

        }}/>
        <div style={{
          display:"block"
        }}>
        <Card.Title style={{
          marginTop:"10px",
          marginLeft:'15px',
          fontSize:'22px',
          fontFamily:'Open Sans, sans-serif'
        }}>Vimal Bhalani</Card.Title>
        <Card.Title style={{
          fontSize:'17px',
          marginLeft:'15px',
          color:"#6F6B80",
          fontFamily:'Open Sans, sans-serif'

          
        }}>CTO/Co-founder at Scriptus</Card.Title>
        </div>
        </div>
      </Card.Body>
    </Card>
     </Col>
     <Col>
     <Card style={{ width: '22rem',
        marginTop:'25px',
    }} className='sha'>
     
     <Card.Body>
       
       <Card.Text className='tex1' style={{
        marginTop:"90px",
        marginBottom:"30px"
       }}>
       It was a great pleasure in working with Ammar. I got to know him as very professional and persistent but always courteous. He knows what he is talking about and stands for his word.
       </Card.Text>
       <div style={{
         display:'flex'
       }}> 
       <Card.Img variant="top" src={rec2} className='img1' style={{
         width:"60px",
         height:"60px"

       }}/>
       <div style={{
         display:"block"
       }}>
       <Card.Title style={{
         marginTop:"10px",
         marginLeft:'15px',
         fontSize:'22px',
         fontFamily:'Open Sans, sans-serif'
       }}>Marc S.</Card.Title>
       <Card.Title style={{
         fontSize:'17px',
         marginLeft:'15px',
         color:"#6F6B80",
         fontFamily:'Open Sans, sans-serif'
       }}>Founder at Blackbelt XP</Card.Title>
       </div>
       </div>
     </Card.Body>
   </Card>
     </Col>
     <Col>
     <Card style={{ width: '22rem' }} className='sha'>
     
      <Card.Body>
        
        <Card.Text className='tex1' style={{
          marginTop:'20px'
        }}>
        Ammar is a thorough professional with an acute understanding of the market needs and dynamics. His attention to detail in analyzing the customer's needs and the ability to produce results based on those needs is what sets him apart from everyone else. He is a great door opener for opportunities
        </Card.Text>
        <div style={{
          display:'flex',
          
        }}> 
        <Card.Img variant="top" src={rec3} className='img1' style={{
          width:"60px",
          height:"60px"
         
        }}/>
        <div style={{
          display:"block"
        }}>
        <Card.Title style={{
          marginTop:"10px",
          marginLeft:'15px',
          fontSize:'22px',
          fontFamily:'Open Sans, sans-serif'
        }}>Hussnain Raza</Card.Title>
        <Card.Title style={{
          fontSize:'17px',
          marginLeft:'15px',
          color:"#6F6B80",
          fontFamily:'Open Sans, sans-serif'
        }}>IT Manager</Card.Title>
        </div>
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

export default Recommendations