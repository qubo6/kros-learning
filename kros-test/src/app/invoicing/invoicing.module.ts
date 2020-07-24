import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { InvoicingRoutingModule } from './invoicing-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { SideBarFooterComponent } from './side-bar-footer/side-bar-footer.component';

@NgModule({
  declarations: [ContentComponent, SideBarComponent, AddInvoiceComponent, InvoiceItemComponent, SideBarFooterComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvoicingRoutingModule
  ]
})
export class InvoicingModule { }
