"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <Logo src="``${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/vistamart-logo.png`" alt="Vistamart Logo" />
    <NavLinks>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/cart">Cart</Link>
    </NavLinks>
    <SearchBar placeholder="Search..." />
    <Icons>
      <AccountIcon>👤</AccountIcon>
      <CartIcon>🛒</CartIcon>
    </Icons>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;

const AccountIcon = styled.div``;
const CartIcon = styled.div``;

export default Navbar;
