import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './shared/contact-form/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog
  ){}
  openFormPopup(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed');
    });
  }
}
