import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

/**
 * Al extender la clase, en la nueva clase se pasa el tipo que
 * usa esa clase, ya que lo recibe de forma dinámica con generics
 */
export class ProductHttpService extends BaseHttpService<Product> {
  otraFucion() {
    console.info(this.API_URL);
    this.findAll();
  }
}
