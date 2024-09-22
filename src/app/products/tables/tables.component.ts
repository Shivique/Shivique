import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  constructor(
    private productService: ProductService
  ){}

  products: any;
  gridStyle = {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };
  
  public ngOnInit(): void {
    this.productService.getTablesData().subscribe((res: any) => {
      this.products = res;
    })
  }


}
