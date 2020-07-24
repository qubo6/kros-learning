import { Component, OnInit } from '@angular/core';
import { InvoicingService } from '../invoicing.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private invoicingService: InvoicingService
  ) { }

  filterText = '';
  invoices: Invoice[];
  vystavene: number;
  spaltene: number;



  ngOnInit(): void {
    this.invoicingService.generateInvoiceList();
    this.invoices = this.invoicingService.invoices;
  }

  filter(text: string) {
    this.invoicingService.filter(text);
    this.invoices = this.invoicingService.invoices;
  }

}

export class Invoice {
  id: number;
  titile: string;
  price: number;
}
