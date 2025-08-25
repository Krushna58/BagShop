import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

function Shop() {
  const products = [
    { id: 1, name: 'Leather Bag', price: 1200, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Ladies Purse', price: 900, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Travel Backpack', price: 1500, image: 'https://via.placeholder.com/200' },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row className="justify-content-center">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Row>
    </Container>
  );
}
export default Shop;
