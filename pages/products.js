import Navbar from '../src/components/Navbar';
import ProductCard from '../src/components/ProductCard';
import Footer from '../src/components/Footer';

const Products = () => (
  <div>
    <Navbar />
    <ProductList>
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
  { id: 1, name: 'Product 1', price: 100, image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 200, image: '/images/product2.jpg' },
  // Add more products as needed
];

export default Products;
