import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog-box/dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: any;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const screenWidth = window.innerWidth; 
    
    if (screenWidth >= 600) { 
      this.dialog.open(DialogComponent, {
        data: { product: this.product },
        panelClass: 'custom-dialog-container'
      });
    } else {
      console.log('Screen too small to open dialog');
    }
  }

}
