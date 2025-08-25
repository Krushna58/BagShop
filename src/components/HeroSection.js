import React from 'react';
import { Container, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="bg-light text-center p-5">
      <Container>
        <h1 className="mb-3">Welcome to BagShop</h1>
        <p className="mb-4">Trendy bags & purses for every occasion.</p>
        <Button variant="primary" href="/shop">Shop Now</Button>
      </Container>
    </div>
  );
}
export default HeroSection;
