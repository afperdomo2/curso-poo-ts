import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

// Crear un producto
const createdProduct = productService.create({
  title: 'Camisa',
  price: 1000,
  description: 'Camisa para salir',
  categoryId: 1,
  images: ['https://picsum.photos'],
});
console.info('createdProduct:', createdProduct);

const products = productService.findAll();

// Actualizar un producto
const productId = products[0].id;
const updatedProduct = productService.update(productId, {
  title: 'Camisa negra',
});
console.info('updatedProduct:', updatedProduct);
