import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import fetchProducts from './fetchProducts';

async function getProducts(setGlobalProducts) {
  let json = await fetchProducts();
  setGlobalProducts(
    json.map((item) => {
      return (
        <Link to={'produto/' + item.id} className={styles.divs}>
          <img alt="foto" src={item.fotos[0].src}></img>
          <h3>{item.nome}</h3>
        </Link>
      );
    }),
  );
}

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {
  const [globalProducts, setGlobalProducts] = React.useState(null);
  const [table, setTable] = React.useState(null);
  // Sets the products into table
  React.useEffect(() => {
    fetchProducts().then((i) => setTable(i));
  }, []);
  // Get products
  React.useEffect(() => {
    getProducts(setGlobalProducts);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ globalProducts, setGlobalProducts, table, setTable }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
