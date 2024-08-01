// Import statements and setup
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Products.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

// Product data
const products = [
    {
        id: 1,
        title: 'TP-Link Archer AX23 AX1800 Dual-Band Wi-Fi 6 Router',
        description: 'Enjoy high-speed internet with this dual-band Wi-Fi 6 router featuring advanced security and coverage.',
        price: 139,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/1large_1627273016330o_610x_crop_center.jpg?v=1694698041'
    },
    {
        id: 2,
        title: 'Steam Deck 64GB Handheld Console',
        description: 'Powerful handheld gaming console with 64GB storage, capable of running a wide range of games.',
        price: 399,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/SteamDeck1_cf4d96c9-705b-4fe6-be20-faa5483de747_610x_crop_center.jpg?v=1714038468'
    },
    {
        id: 3,
        title: 'PCBuilder AMD Ryzen 5 5600X Barricade Windows 11 Gaming PC',
        description: 'High-performance gaming PC with AMD Ryzen 5 5600X processor, perfect for intense gaming sessions.',
        price: 1099,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/pcb_barricade_03_wr_01_610x_crop_center.jpg?v=1708563810'
    },
    {
        id: 4,
        title: 'MegaTek Core Box Only i3 13th Gen 8GB 500GB NVMe SSD Windows 11 Home PC',
        description: 'Compact and powerful PC with Intel i3 13th Gen, 8GB RAM, and 500GB NVMe SSD.',
        price: 649,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/rct-sm01_c_2_1_610x_crop_center.jpg?v=1694695404'
    },
    {
        id: 5,
        title: 'PCBuilder AMD Ryzen 5 5600X Level Up Prime Upgrade Kit',
        description: 'Upgrade kit featuring AMD Ryzen 5 5600X, designed to enhance the performance of your current PC.',
        price: 229,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/PCB-UPK_08.1_610x_crop_center.jpg?v=1713947412'
    },
    {
        id: 6,
        title: 'PCBuilder Intel i3-12100 Office Master Core Windows 11 Pro Desktop PC',
        description: 'Intel i3-12100 desktop PC with Windows 11 Pro, ideal for office and everyday tasks.',
        price: 749,
        imageUrl: 'https://www.syntech.co.za/wp-content/uploads/2023/07/PCB_HOME_R58G-V2_wr_01a-600x600.jpg'
    },
    {
        id: 7,
        title: 'Asus M3400 Series 23.8" FHD Ryzen 5 8GB RAM 512GB SSD All-in-One Desktop PC (White)',
        description: 'Sleek all-in-one desktop PC with a 23.8" FHD display, Ryzen 5 processor, and 512GB SSD.',
        price: 1099,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/M3400.1_610x_crop_center.jpg?v=1716473322'
    },
    {
        id: 8,
        title: 'PCBuilder Tempest Chill Fan Kit 3x120mm Dual Glow ARGB Fan Controller RF Remote',
        description: 'Fan kit with three 120mm ARGB fans and RF remote control for customized cooling and lighting.',
        price: 89,
        imageUrl: 'https://www.syntech.co.za/wp-content/uploads/2023/02/PCB-CF-TEMP-DKIT_wr_01a.jpg'
    },
    {
        id: 9,
        title: 'PCBuilder Hydro Chill 360mm AIO Liquid CPU Cooler ARGB',
        description: '360mm AIO liquid CPU cooler with ARGB for efficient cooling and stylish lighting.',
        price: 149,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/PCB-LC-HYDRO-C360_610x_crop_center.jpg?v=1715595768'
    },
    {
        id: 10,
        title: 'MSI Cyborg 15 A12VF-085ZA Core i7 12th Gen 16GB DDR5 RAM 512GB SSD NVIDIA RTX4060 8GB',
        description: 'Gaming laptop with Intel Core i7 12th Gen, 16GB DDR5 RAM, and NVIDIA RTX4060 GPU.',
        price: 1899,
        imageUrl: 'https://computermania.co.za/cdn/shop/files/cyborg_15_a13ve-449za_1_7f5bd9e2-27c5-451e-a128-5227983ef487_610x_crop_center.jpg?v=1712325953'
    }
];

const colorOptions = ["Red", "Blue", "Green"]; // Define color options for products

// Main Products component
export default function Products() {
    const [selectedColors, setSelectedColors] = useState({}); // State to track selected colors for products
    const dispatch = useDispatch();

    // Handle adding a product to the cart
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    // Handle color selection for a product
    const handleColorSelect = (productId, color) => {
        setSelectedColors(prevColors => ({
            ...prevColors,
            [productId]: color
        }));
    };

    // JSX for rendering the products page
    return (
        <Container className="products-container">
            <Row>
                {products.map((product) => (
                    <Col md={4} key={product.id} className="product-card">
                        <Card>
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body className="product-details">
                                <Card.Title className="product-title">{product.title}</Card.Title>
                                <Card.Text className="product-description">{product.description}</Card.Text>
                                <Card.Text className="product-price">${product.price}</Card.Text>
                                <Dropdown onSelect={(eventKey) => handleColorSelect(product.id, eventKey)}>
                                    <Dropdown.Toggle 
                                        variant="secondary" 
                                        id={`dropdown-basic-${product.id}`}
                                        style={{ backgroundColor: selectedColors[product.id] || 'transparent', color: selectedColors[product.id] ? 'white' : 'black' }}
                                    >
                                        {selectedColors[product.id] || 'Choose Color'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {colorOptions.map(color => (
                                            <Dropdown.Item 
                                                key={color} 
                                                eventKey={color}
                                                style={{ backgroundColor: color === selectedColors[product.id] ? color : 'transparent', color: color === selectedColors[product.id] ? 'white' : 'black' }}
                                            >
                                                {color}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button className="add-to-cart-button" variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
