import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InvoicingModule } from './invoicing/invoicing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoicingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
