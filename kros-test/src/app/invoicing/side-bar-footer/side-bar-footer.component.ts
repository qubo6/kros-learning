import { Component, OnInit } from '@angular/core';
import { InvoicingService } from '../invoicing.service';

@Component({
  selector: 'app-side-bar-footer',
  templateUrl: './side-bar-footer.component.html',
  styleUrls: ['./side-bar-footer.component.scss']
})
export class SideBarFooterComponent implements OnInit {

  constructor(
    private invoicingService: InvoicingService
  ) { }

  ngOnInit(): void {

  }

  get created(): number {
   return this.invoicingService.created;
  }

  get repayment(): number {
    return this.invoicingService.repayment;
   }
}
