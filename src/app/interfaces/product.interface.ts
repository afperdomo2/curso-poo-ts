import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';

export interface ProductService {
  create(data: CreateProductDto): Product | Promise<Product>;

  update(
    id: Product['id'],
    changes: UpdateProductDto
  ): Product | Promise<Product>;

  findOne(id: Product['id']): Product | Promise<Product> | undefined;

  findAll(): Product[] | Promise<Product[]>;
}
