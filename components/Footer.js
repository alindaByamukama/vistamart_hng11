import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <a href="#">Legal</a>
      <a href="#">Follow Us</a>
      <a href="#">Newsletter</a>
    </FooterLinks>
    <CopyRight>© 2024 Your Company</CopyRight>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CopyRight = styled.div``;

export default Footer;
