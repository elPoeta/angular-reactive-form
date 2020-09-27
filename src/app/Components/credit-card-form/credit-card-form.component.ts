import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
