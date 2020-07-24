import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes = [
  {
    path: '',
    component: ContentComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class InvoicingRoutingModule { }
