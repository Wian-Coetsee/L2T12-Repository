import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'; 
import '../styles/Landing.css';

const Landing = () => {
    return (
        <Container fluid className="landing-container">
            
            {/* Hero section with introductory content and image */}
            <Row className="hero-section align-items-center">
                <Col md={6} className="text-center text-md-start">
                    <h1 className="display-3">Welcome to ComputerMania!</h1>
                    <p className="lead">
                        Discover the latest and greatest in technology with our wide selection of high-performance computers, accessories, and more.
                    </p>
                    <Button variant="primary" size="lg" href="/products">Shop Now</Button>
                </Col>
                <Col md={6} className="text-center">
                    <Image 
                        src="https://www.fortunainvestmentholdings.com/assets/images/listing_image/mania.jpg" 
                        alt="Store Image" 
                        fluid 
                        className="store-image" 
                    />
                </Col>
            </Row>
            
            {/* Information section with mission, quality, and support details */}
            <Row className="info-section text-center my-5"> 
            <Col md={4}>
                    <h3>Our Mission</h3>
                    <p>
                        At ComputerMania, we aim to provide top-quality tech products at unbeatable prices. Our mission is to make technology accessible and enjoyable for everyone.
                    </p>
                </Col>
                <Col md={4}>
                    <h3>Quality Guarantee</h3>
                    <p>
                        We stand by the quality of our products with a satisfaction guarantee. Rest assured that each item has been thoroughly tested for performance and reliability.
                    </p>
                </Col>
                <Col md={4}>
                    <h3>Customer Support</h3>
                    <p>
                        Our dedicated customer support team is here to help you with any questions or concerns. We’re committed to providing you with the best shopping experience.
                    </p>
                </Col>
            </Row>
            {/* Promotional section with special offers */}
            <Row className="promo-section text-center my-5"> 
            <Col>
                    <h2>Special Offers</h2>
                    <p>Check out our latest promotions and discounts on selected products. Don't miss out on these amazing deals!</p>
                    <Button variant="success" size="lg" href="/products">View Offers</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;
