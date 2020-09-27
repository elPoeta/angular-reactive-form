import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreditCardFormComponent } from './Components/credit-card-form/credit-card-form.component';
import { InputComponent } from './Components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardFormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
