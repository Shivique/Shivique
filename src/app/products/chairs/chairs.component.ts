import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent {
  constructor(
    private productService: ProductService
  ){}

  products: any;
  gridStyle = {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };
  
  public ngOnInit(): void {
    this.productService.getChairsData().subscribe((res: any) => {
      this.products = res;
    })
  }

}
