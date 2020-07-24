import { Injectable } from '@angular/core';
import { Invoice } from './side-bar/side-bar.component';

@Injectable({
  providedIn: 'root'
})
export class InvoicingService {

  created: number;
  repayment: number;

  private filterText = '';
  private allInvoices: Invoice[] = [];
  private filtredInvoices: Invoice[] = [];

  constructor() { }

  filter(text: string) {
    this.filterText = text;
    this.filtredInvoices = this.allInvoices.filter(x => x.titile.includes(text));
    this.setFooter();
  }

  get invoices(): Invoice[]{
    return this.filterText ? this.filtredInvoices : this.allInvoices;
  }

  generateInvoiceList() {
    for (let i = 0; i < 500; i++) {
      this.allInvoices.push({
        id : i,
        titile : this.stringGenerator(),
        price : this.numberGenerator(),
      } as Invoice);
    }
    this.setFooter();
  }

  addInvoice(title: string) {
    if(title.length > 0) {
      this.invoices.push({
        id: 0,
        titile: title,
        price: this.numberGenerator()
      }as Invoice);
    }
  }

  private stringGenerator(): string {
    let randomCodes = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      randomCodes += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomCodes;
  }

  private numberGenerator(): number {
    return Math.round(Math.random() * 10) / 10;
  }


  private setFooter() {
    this.created = this.invoices.filter(x => x.price <= 0.5).length;
    this.repayment = this.invoices.filter(x => x.price > 0.5).length;
  }
}
