import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/beds/product.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ChairsComponent } from './products/chairs/chairs.component';
import { ConsoleComponent } from './products/console/console.component';
import { KitchenComponent } from './products/kitchen/kitchen.component';
import { SofaComponent } from './products/sofa/sofa.component';
import { TablesComponent } from './products/tables/tables.component';
import { VanityComponent } from './products/vanity/vanity.component';
import { WardrobeComponent } from './products/wardrobe/wardrobe.component';
import { DiningTablesComponent } from './products/dining-tables/dining-tables/dining-tables.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'beds', component: ProductComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'chairs', component: ChairsComponent },
  {path: 'console', component: ConsoleComponent },
  {path: 'kitchen', component: KitchenComponent },
  {path: 'sofa', component: SofaComponent },
  {path: 'tables', component: TablesComponent },
  {path: 'vanity', component: VanityComponent },
  {path: 'wardrobes', component: WardrobeComponent },
  {path: 'dining-tables', component: DiningTablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
