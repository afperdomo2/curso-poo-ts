import { ProductHttpService } from './services/product-http.service';

const productService = new ProductHttpService();

(async () => {
  console.info('--'.repeat(10));

  try {
    const products = await productService.findAll();

    console.info('count:', products.length);
    console.info(products.map((item) => item.price));

    const productId = products[0].id;
    await productService.update(productId, {
      price: 10_000,
      title: 'Camisa negra',
      description: 'La camisa negra de Juanes',
    });
    const product = await productService.findOne(productId);
    console.info('product:', product);
  } catch (error) {
    console.error(error);
  }
})();
