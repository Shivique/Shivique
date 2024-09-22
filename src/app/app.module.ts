import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductComponent } from './products/beds/product.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './shared/cards/card/card.component';
import { DialogComponent } from './shared/dialog-box/dialog/dialog.component';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { ChairsComponent } from './products/chairs/chairs.component';
import { ConsoleComponent } from './products/console/console.component';
import { KitchenComponent } from './products/kitchen/kitchen.component';
import { SofaComponent } from './products/sofa/sofa.component';
import { TablesComponent } from './products/tables/tables.component';
import { VanityComponent } from './products/vanity/vanity.component';
import { WardrobeComponent } from './products/wardrobe/wardrobe.component';
import { FormComponent } from './shared/contact-form/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeCardComponent } from './shared/home-cards/home-card/home-card.component';
import { DiningTablesComponent } from './products/dining-tables/dining-tables/dining-tables.component';
import { AboutUsComponent } from './about-us/about-us.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    CardComponent,
    DialogComponent,
    FaqComponent,
    ChairsComponent,
    ConsoleComponent,
    KitchenComponent,
    SofaComponent,
    TablesComponent,
    VanityComponent,
    WardrobeComponent,
    FormComponent,
    HomeCardComponent,
    DiningTablesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    SlickCarouselModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
