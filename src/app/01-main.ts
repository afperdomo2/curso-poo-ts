import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  async function getProducts() {
    // 1. Tipando los datos asíncronos directamente en la petición axios
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );

    // 2. Tipando después de recibir los datos
    const response2 = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    // Tipando los datos por la fuerza
    const data2 = response2.data as Product[];
    console.info('count:', data2.length);

    return data;
  }

  const products = await getProducts();
  console.info('products:', products);
  console.info(products.map((item) => item.id));
})();
