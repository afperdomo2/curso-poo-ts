import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../interfaces/product.interface';
import { Product } from '../models/product.model';

export class ProductHttpService implements ProductService {
  private readonly API_URL = 'https://api.escuelajs.co/api/v1/products';

  async create(newProduct: CreateProductDto) {
    const { data } = await axios.post(this.API_URL, newProduct);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.API_URL}/${id}`, changes);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.API_URL}/${id}`);
    return data;
  }

  async findAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.API_URL);
    return data;
  }
}
