import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Hero.css'

const Hero = ({onClick}) => {
    return (
        <div className="mt-5 pb-5">
            <Container>
                {/* <div>
                    <Row>
                        <Col>
                            <p className='text-one'>Bring us your dreams.</p>
                            <p className='text-second'>We’ll make them a reality.</p>
                        </Col>
                    </Row>
                </div> */}
                <div className='mt-5'>
                    <Row>
                        <p className='text-para'>
                            We serve conscious entrepreneurs in their ambitions to make <br />
                            meaningful impact in education, e-commerce and media.
                        </p>
                    </Row>
                    <div className='mt-5'>
                        <Row>
                            {/* <Button className="join" as="input" type="submit" variant="outline-secondary" value="JOIN US" /> */}
                            <li className="join_button" onClick={onClick}>JOIN US</li>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero