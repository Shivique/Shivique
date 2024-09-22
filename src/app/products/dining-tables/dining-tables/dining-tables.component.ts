import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-dining-tables',
  templateUrl: './dining-tables.component.html',
  styleUrls: ['./dining-tables.component.css']
})
export class DiningTablesComponent {
  constructor(
    private productService: ProductService
  ){}

  products: any;
  gridStyle = {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };
  
  public ngOnInit(): void {
    this.productService.getDiningTablesData().subscribe((res: any) => {
      this.products = res;
    })
  }
}
