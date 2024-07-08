"use client";


import styled from 'styled-components';

const Banner = () => (
  <BannerContainer>
    <h1>Welcome to Our Store</h1>
    <p>Find the best products here</p>
  </BannerContainer>
);

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: #eee;
  text-align: center;
`;

export default Banner;
