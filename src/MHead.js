import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const MHead = () => {
  const navigate = useNavigate();
  return (
    <header>
      <button onClick={() => navigate('/')} className={styles.mainButton}>
        Produtos
      </button>
      <button
        onClick={() => navigate('/contato')}
        className={styles.mainButton}
      >
        Contato
      </button>
    </header>
  );
};

export default MHead;
