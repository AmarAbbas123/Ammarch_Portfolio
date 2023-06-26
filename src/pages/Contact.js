import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import FormComponent from '../components/FormComponent'
import Icon from '../components/Icon'

const Contact = () => {
  return (
    <div style={{
      paddingTop:'10%',
      paddingBottom:"6%"
    }} id="Contact">
      <Container>
        <Row style={{
          paddingBottom:"70px"
        }}>
          <h2 style={{
             textAlign:'center',
             fontStyle:'italic',
             color:"#F75023",
             fontFamily:'Open Sans, sans-serif'
          }}>Contact Me</h2>
          <h1 style={{
             textAlign:'center',
             fontFamily:'Open Sans, sans-serif'
          }}>I Want To Hear From You</h1>
          <p style={{
            textAlign:'center',
            fontSize:'16.5px',
            paddingTop:'12px',
            color:'#6F6B80',
            fontFamily:'Open Sans, sans-serif'
            
          }}>
          Please fill out the form on this section to contact with me. Or call
           between 9:00 
          </p>
          <p style={{
            textAlign:'center',
            fontSize:'16.5px',
            marginTop:'-10px',
            color:'#6F6B80',
            fontFamily:'Open Sans, sans-serif'
            
          }}>
          a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </Row>
        <Row>
          <Col>
          <Icon />
          </Col>
          <Col> <FormComponent  /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact