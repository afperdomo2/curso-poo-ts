import axios from 'axios';

(async () => {
  /**
   * Por inferencia, ya va a saber que el return de la
   * función es un boolean
   */
  function delay(time: number) {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  }

  async function getProducts() {
    const response = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    return response.data;
  }

  console.info('Starting...');
  const rta = await delay(2000);
  console.info('rta:', rta);

  const products = await getProducts();
  console.info('products:', products);
})();
