import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

function Navs() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Navbar fixed='top' variant='dark' bg='dark' expand='md'>
                            <Container>
                                <Navbar.Brand href='#'>
                                    <img
                                        src='logo192.png'
                                        height='30'
                                        width='30'
                                        className='align-top'
                                    />
                                    &nbsp;
                                    My Website
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls='my-nav'/>
                                <Navbar.Collapse id='my-nav'>
                                <Nav className='me-auto fw-bold'>
                                    <Nav.Link href='#'>Home</Nav.Link>
                                    <NavDropdown title='Services' id='my-nav'>
                                    <NavDropdown.Header>Heading 1</NavDropdown.Header>
                                        <NavDropdown.Item href='#'>Service 1</NavDropdown.Item>
                                        <NavDropdown.Item href='#'>Service 2</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Header>Heading 2</NavDropdown.Header>
                                        <NavDropdown.Item href='#'>Service 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href='#'>About</Nav.Link>
                                    <Nav.Link href='#'>Contact</Nav.Link>
                                </Nav>
                                <Navbar.Text>
                                    Sign In Here <a href='#'>Login</a>
                                </Navbar.Text>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                        <h2> this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text</h2>
                        <h2> this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text</h2>
                        <h2> this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text
                        this is a random text this is a random textthis is a random textthis is a random text</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Navs