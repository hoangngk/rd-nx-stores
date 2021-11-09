import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'rd-nx-stores-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isLinear = true;
  public isEditable = true;
  public frmValues = {};
  public profileForm!: FormGroup;
  public addressForm!: FormGroup;
  public paymentInfoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['First Name', Validators.compose([Validators.required])],
      lastName: ['Last Name', Validators.compose([Validators.required])],
      phone: [null], // optional
      email: [
        'johndoe@example.com',
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
    this.addressForm = this.fb.group({
      addressOne: [null, Validators.compose([Validators.required])],
      addressTwo: [null], // optional
      city: [null, Validators.compose([Validators.required])],
      county: [null, Validators.compose([Validators.required])],
      country: [null, Validators.compose([Validators.required])],
    });
    this.paymentInfoForm = this.fb.group({
      creditCardNo: [
        '4111 1111 1111 1111',
        Validators.compose([Validators.required]),
      ],
      expiryDate: ['', Validators.compose([Validators.required])],
      cvvCode: ['', Validators.compose([Validators.required])],
    });
  }

  public submit(): void {
    console.log('submitted');
  }
}
