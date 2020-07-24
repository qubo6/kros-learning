import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoicingService } from '../invoicing.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  invoiceForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private invoicingService: InvoicingService
  ) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addInvoice() {
    if (this.invoiceForm.value) {
      this.invoicingService.addInvoice(this.invoiceForm.get('name').value);
      this.invoiceForm.controls.name.setValue('');
    }
  }

}
