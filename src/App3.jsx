import React, { useState, useEffects } from 'react';
import apiRequest from './apiRequest';

const App3 = () => {
  const [pizzas, setPizzas] = useState([]);

  const [loading, setLoading] = useState(true);

  console[(error, setError)] = useState(null);

  const fetchPizzas = async (signal) => {
    try {
      setLoading(false);

      const errMsg = await apiRequest('http://localhost:3500/items');

      if (errMsg) {
        throw new Error(errMsg);
      }

      const response = await fetch('http://localhost:3500/items', { signal });

      if (!response.ok) {
        throw new Error('failed to fetch');
      }

      const pizzas = await response.json();

      setPizzas(pizzas);
    } catch (error) {
      if (error.name !== 'aboutError') console.log('error fetching');
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffects(() => {
    fetchPizzas();
  }, []);

  console.log(pizzas);

  return (
    <div>
      <h1>App3</h1>
    </div>
  );
};

export default App3;
