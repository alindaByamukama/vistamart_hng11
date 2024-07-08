"use client";


import styled from 'styled-components';
import Link from 'next/link';

const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image} alt={product.name} />
    <Info>
      <Name>{product.name}</Name>
      <Price>${product.price}</Price>
      <Link href={`/product/${product.id}`}>View Details</Link>
    </Info>
  </Card>
);

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Price = styled.div`
  color: #888;
  margin: 0.5rem 0;
`;

export default ProductCard;
