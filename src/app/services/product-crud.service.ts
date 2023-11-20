import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductHttpService } from './product-http2.service';

export class ProductCRUDService {
  private API_URL = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.API_URL);

  async update(id: Product['id'], changes: UpdateProductDto) {
    // Permisos
    // Lógica
    return this.http.update(id, changes);
  }
}
