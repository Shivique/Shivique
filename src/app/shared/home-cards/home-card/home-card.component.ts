import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  isPopupOpen: boolean = true;
  

  // Method to open the popup, triggered when a card is clicked
  openPopup(card: any) {
    this.isPopupOpen = true;   // Set the popup visibility to true
  }

  // Method to close the popup, triggered by the close button
  closePopup() {
    this.isPopupOpen = false;  // Set the popup visibility to false
  }
}
