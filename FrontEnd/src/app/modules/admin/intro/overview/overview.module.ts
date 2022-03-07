import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


const overviewRoutes: Route[] = [
  {
      path     : '',
      component: OverviewComponent
  }
];
@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    

    RouterModule.forChild(overviewRoutes)

  ]
})
export class OverviewModule { }
