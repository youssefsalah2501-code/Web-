import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private readonly products = [
    { id: 1, name: 'Laptop', price: 2500 },
    { id: 2, name: 'Tablet', price: 25 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
