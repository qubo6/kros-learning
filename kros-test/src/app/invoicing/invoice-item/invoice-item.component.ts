import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {

  @Input() invoice: Invoice;

  constructor() { }

  ngOnInit(): void {
  }

  get getText(): string {
    return this.invoice.price < 0.5 ? 'vytvorena' : 'splatena';
  }

}
