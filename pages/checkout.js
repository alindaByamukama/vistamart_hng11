"use client";


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Checkout = () => (
  <div>
    <Navbar />
    <CheckoutContainer>
      <h1>Checkout</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Address
          <input type="text" name="address" required />
        </label>
        <label>
          Payment Method
          <input type="text" name="payment" required />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </CheckoutContainer>
    <Footer />
  </div>
);

const CheckoutContainer = styled.div`
  padding: 2rem;
`;

export default Checkout;
