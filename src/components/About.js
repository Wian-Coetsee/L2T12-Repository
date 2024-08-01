import React from 'react';
import { Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css';

// URLs for store images
const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxa4eaTRMt0q9wU5PViz6hKRAzJDPGnASbw&s';
const storeImage1 = 'https://www.fortunainvestmentholdings.com/assets/images/listing_image/mania.jpg';
const storeImage2 = 'https://media.licdn.com/dms/image/C4E1BAQHWilTdqKf9Bg/company-background_10000/0/1585317813148/computermania_cover?e=2147483647&v=beta&t=b5NsGdMbgKAZS0WjMu5KS2v4ZYr38fO-dDeti6VrjkM';

// Functional component for the About page
export default function About() {
    return (
        <div className="about-container">
            <Figure className="logo-figure">
                <Figure.Image
                    width={400}
                    height={200}
                    alt="ComputerMania Logo"
                    src={logo}
                    className="logo-image"
                />
                <Figure.Caption>
                    <h2>Welcome to ComputerMania!</h2>
                    <p>At ComputerMania, we are passionate about all things tech. As your trusted destination for cutting-edge computer hardware and accessories, we offer a diverse selection of products tailored to meet every need, from casual users to dedicated gamers and tech enthusiasts.</p>
                    <p><strong>Our Store</strong></p>
                    <p>Explore our extensive range of high-performance products, including powerful gaming PCs, advanced peripherals, stylish all-in-one desktops, and essential accessories. Our commitment to quality means that every item in our store is carefully selected to ensure you receive the best technology available.</p>
                    <p><strong>Why Choose Us?</strong></p>
                    <ul>
                        <li><strong>Expertise:</strong> Our team of knowledgeable professionals is always on hand to provide expert advice and recommendations tailored to your specific needs.</li>
                        <li><strong>Quality:</strong> We source our products from reputable brands to ensure you get reliable, high-quality equipment.</li>
                        <li><strong>Customer Satisfaction:</strong> At ComputerMania, your satisfaction is our top priority. We strive to offer exceptional customer service and support, ensuring a seamless shopping experience.</li>
                        <li><strong>Innovation:</strong> Stay ahead of the curve with our selection of the latest technology and innovations, designed to enhance your computing experience.</li>
                    </ul>
                    <p>Whether you're looking to build your dream gaming rig, upgrade your office setup, or simply find the perfect accessory, ComputerMania has you covered. Visit us today and discover why we are the go-to destination for all your computer needs.</p>
                    <p><strong>Contact Us</strong></p>
                    <p>For inquiries or more information, reach out to us at info@computermania.co.za. Our friendly team is here to help!</p>
                </Figure.Caption>
            </Figure>
            {/* Store images */}
            <div className="store-images">
                <Figure className="store-figure">
                    <Figure.Image
                        width={600}
                        height={450}
                        alt="Store Image 1"
                        src={storeImage1}
                        className="store-image"
                    />
                </Figure>
                <Figure className="store-figure">
                    <Figure.Image
                        width={600}
                        height={450}
                        alt="Store Image 2"
                        src={storeImage2}
                        className="store-image"
                    />
                </Figure>
            </div>
        </div>
    );
}
