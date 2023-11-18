import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export class BaseHttpService<T> {
  constructor(private API_URL: string) {}

  async findAll() {
    const { data } = await axios.get<T[]>(this.API_URL);
    return data;
  }
}

(async () => {
  const API_URL_C = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(API_URL_C);
  const categories = await categoryService.findAll();
  console.info('\ncaterories:', categories.length);

  const API_URL_P = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(API_URL_P);
  const products = await productService.findAll();
  console.info('\nproducts:', products.length);
})();
