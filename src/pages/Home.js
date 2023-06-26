import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import amar1 from "../components/assests/ammar1.png"
import Navbar from "../components/Navbar"
import Portfolio from './Portfolio'
import Service from './Service'
import Contact from './Contact'
import Recommendations from './Recommendations'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    
     <div id='about'>
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
      <Portfolio />
      <Service />
      
      <Recommendations />
      <Contact />
      <Footer />
    </>
  )
}

export default Home