import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTopicComponent } from './addtopic.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';


const addTopicroute: Route[] = [
  {
      path     : '',
      component: AddTopicComponent
  }
];
@NgModule({
  declarations: [
      AddTopicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    RouterModule.forChild(addTopicroute)

  ]
})
export class AddTopicModule { }
