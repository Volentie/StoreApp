import React from 'react';
import { ProductsContext } from './ProductsContext';
import './Produtos.css';

const Produtos = () => {
  // Vars
  const t = React.useContext(ProductsContext);
  const [content, setContent] = React.useState(null);

  // Content handling
  React.useEffect(() => {
    if (t.table) {
      setContent(
        <>
          {t.table.map((i) => {
            let r = new RegExp(`^.+/produto/${i.id}$`);
            let is = r.test(window.location.href);
            if (is) {
              return (
                <>
                  <img
                    className="Pimg"
                    src={i.fotos[0].src}
                    alt="foto-do-produto"
                  />
                  <h1 className="nome">{i.nome}</h1>
                  <p className="preco">R${i.preco}</p>
                  <p className="descricao">{i.descricao}</p>
                  <div className="test"></div>
                </>
              );
            }
            return null;
          })}
        </>,
      );
    }
  }, [t.table]);

  // Return
  return (
    <section>
      {(content && <div className="Pdiv">{content}</div>) || (
        <div class="loader"></div>
      )}
    </section>
  );
};

export default Produtos;
