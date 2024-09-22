import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {
  constructor(
    private productService: ProductService
  ){}

  products: any;
  gridStyle = {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };

  featuredProducts: any[] = [
    {
      name: 'Grace Bed',
      description: 'Magnificent centerpiece for any bedroom.',
      price: 525000,
      image: 'assets/images/grace-bed.jpg',
      link: '/products/grace-bed',
    },
    {
      name: 'Lawrence Bed',
      description: 'Crown your bedroom with Lawrence bed.',
      price: 290000,
      image: 'assets/images/lawrence-bed.jpg',
      link: '/products/lawrence-bed',
    },
    {
      name: 'Dream Contemporary Bed',
      description: 'Designer bed with relaxing feel.',
      price: 245000,
      image: 'assets/images/dream-bed.jpg',
      link: '/products/dream-bed',
    },
  ];
  
  public ngOnInit(): void {
    this.productService.getBedsData().subscribe((res: any) => {
      this.products = res;
    })
  }

}
