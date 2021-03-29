import React from 'react';
import { ProductsContext } from './ProductsContext';

const Home = () => {
  const g = React.useContext(ProductsContext);
  document.body.style.backgroundColor = 'white';
  // Final rendering
  return (
    <section>
      <main>{g.globalProducts}</main>
    </section>
  );
};

export default Home;
