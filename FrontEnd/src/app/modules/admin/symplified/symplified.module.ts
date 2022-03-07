import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymplifiedComponent } from 'app/modules/admin/symplified/symplified.component';
import { Route, RouterModule } from '@angular/router';


const symplifiedRoutes: Route[] = [
  {
      path     : '',
      component: SymplifiedComponent
  }
];
@NgModule({
  declarations: [SymplifiedComponent],
  imports: [
    RouterModule.forChild(symplifiedRoutes)

  ]
})
export class SymplifiedModule { }
