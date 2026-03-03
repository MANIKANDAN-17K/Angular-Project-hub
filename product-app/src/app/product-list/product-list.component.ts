import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 75000,
      description: 'High performance laptop',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 25000,
      description: 'Latest smartphone',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 3000,
      description: 'Noise cancelling headphones',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Keyboard',
      price: 1500,
      description: 'Mechanical keyboard',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Mouse',
      price: 800,
      description: 'Wireless mouse',
      image: 'https://via.placeholder.com/150'
    }
  ];

  selectedProduct!: Product;

  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }

}