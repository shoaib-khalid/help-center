import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ShopifyComponent } from './shopify.component';
import { HttpClientModule } from '@angular/common/http';


const shopifyRoutes: Route[] = [
  {
      path     : '',
      component: ShopifyComponent
  }
];
@NgModule({
  declarations: [
    ShopifyComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(shopifyRoutes)
  ]
})
export class ShopifyModule { }
