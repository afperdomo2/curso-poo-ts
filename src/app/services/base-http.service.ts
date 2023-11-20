import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<T> {
  constructor(protected API_URL: string) {}

  /**
   * Los tipos de ID y DTO se reciben y aplican de forma dinámica,
   * usando los generics
   */
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.API_URL}/${id}`, changes);
    return data;
  }

  async findAll() {
    const { data } = await axios.get<T[]>(this.API_URL);
    return data;
  }
}

(async () => {
  // Categories
  const API_URL_C = 'https://api.escuelajs.co/api/v1/categories';
  /**
   * Al instanciar la clase BaseHttpService, se pasa el tipo para
   * para recibirlo con generics directamente en la clase
   */
  const categoryService = new BaseHttpService<Category>(API_URL_C);
  const categories = await categoryService.findAll();
  console.info('\ncaterories:', categories.length);

  // Products
  const API_URL_P = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(API_URL_P);
  const products = await productService.findAll();
  console.info('\nproducts:', products.length);

  productService.update<Product['id'], UpdateProductDto>(1, { price: 2000 });
})();
