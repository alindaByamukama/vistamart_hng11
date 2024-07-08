import styled from 'styled-components';
import { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map(item => (
          <CartItem key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </CartItem>
        ))
      )}
      <Total>
        <p>Total: $0.00</p>
        <CheckoutButton>Checkout</CheckoutButton>
      </Total>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
`;

const Total = styled.div`
  margin-top: 2rem;
  text-align: right;
`;

const CheckoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
`;

export default Cart;
