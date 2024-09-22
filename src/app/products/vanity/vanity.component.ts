import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-vanity',
  templateUrl: './vanity.component.html',
  styleUrls: ['./vanity.component.css']
})
export class VanityComponent {
  constructor(
    private productService: ProductService
  ){}

  products: any;
  gridStyle = {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };
  
  public ngOnInit(): void {
    this.productService.getVanityData().subscribe((res: any) => {
      this.products = res;
    })
  }


}
