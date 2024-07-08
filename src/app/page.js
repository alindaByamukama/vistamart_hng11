"use client";

import styled from 'styled-components';
import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => (
  <div>
    <Navbar />
    <Banner />
    <ProductList>
      {/* Map through products and render ProductCard components */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductList>
    <Footer />
  </div>
);

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
`;

const products = [
  { id: 1, name: 'Bamboo Lid', price: 100, image: '/images/bamboo-lid.jpg' },
  { id: 2, name: 'Sport', price: 200, image: '/images/sport.jpg' },
  // Add more products as needed
];

export default Home;
