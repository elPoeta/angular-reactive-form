import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditCardFormComponent } from './Components/credit-card-form/credit-card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
